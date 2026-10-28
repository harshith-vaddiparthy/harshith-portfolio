#!/usr/bin/env bash
# Flag credibility risks in a technical blog draft: marketing superlatives,
# absolute claims, numbers without a nearby source, undated version references,
# and internal identifiers that leaked out of the company.
#
# Usage:
#   scan-draft.sh <draft.md> [--quiet] [--no-numbers]
#
#   --quiet       print only the findings table, no section headers
#   --no-numbers  skip the quantitative-claim check; use on a benchmark-heavy
#                 draft once every figure is already in the claim ledger,
#                 otherwise that check drowns out every other finding
#
# Every hit is a candidate, not a verdict: a superlative backed by a measurement
# in the post is fine. Review each line before changing it.
#
# Exit codes: 0 no findings, 1 findings printed, 64 invalid input.

# Requires: bash 3.2+ (macOS default) or bash 4/5 (Linux), plus grep and sed.
# Portable across macOS (BSD userland) and Linux (GNU coreutils): uses POSIX
# regex classes and no GNU-only flags.

set -uo pipefail

quiet=0
skip_numbers=0
file=""

while [ $# -gt 0 ]; do
  case "$1" in
    --quiet) quiet=1; shift ;;
    --no-numbers) skip_numbers=1; shift ;;
    -h|--help) sed -n '2,18p' "$0"; exit 0 ;;
    -*) echo "unknown argument: $1" >&2; exit 64 ;;
    *) file="$1"; shift ;;
  esac
done

[ -n "$file" ] || { echo "usage: scan-draft.sh <draft.md>" >&2; exit 64; }
[ -f "$file" ] || { echo "no such file: $file" >&2; exit 64; }

findings=0

report() { # label, extended-regex
  local label="$1" pattern="$2" hits
  hits=$(grep -nEi -- "$pattern" "$file" 2>/dev/null)
  [ -n "$hits" ] || return 0
  findings=1
  [ "$quiet" -eq 1 ] || printf '\n== %s ==\n' "$label"
  printf '%s\n' "$hits" | sed 's/^/  /'
}

# POSIX ERE has no \b word-boundary token (a GNU/BSD-library extension whose
# exact edge behavior around punctuation-only matches, e.g. a bare "50%" at
# end of line, is not even consistent between grep implementations). Every
# boundary below is spelled out as "start of line or a non-word char" /
# "a non-word char or end of line" instead, which is portable POSIX ERE and
# gives the same result on every platform.
SUPERLATIVES='blazing[ -]?fast|lightning[ -]?fast|best[ -]in[ -]class|world[ -]class|state[ -]of[ -]the[ -]art|revolutionary|game[ -]chang|cutting[ -]edge|seamless|effortless|unparalleled|unmatched|industry[ -]leading|next[ -]generation|robust and scalable|10x (faster|better)'
ABSOLUTES='(^|[^[:alnum:]_])(always|never|any scale|infinitely|zero (config|configuration|downtime|overhead)|guaranteed|100% (reliable|uptime|accurate))([^[:alnum:]_]|$)'
ADOPTION='(^|[^[:alnum:]_])(thousands|millions|hundreds) of (developers|engineers|users|companies|teams)([^[:alnum:]_]|$)|trusted by|loved by developers'
NUMBERS='[0-9]+(\.[0-9]+)?(x|( ?(ms|us|ns|s|sec|seconds|GB|MB|TB|QPS|RPS|req/s)))([^[:alnum:]_]|$)|[0-9]+(\.[0-9]+)?%[[:alnum:]_]'
VERSIONS='(^|[^[:alnum:]_])(latest|current|newest) (version|release|stable)([^[:alnum:]_]|$)'
INTERNAL='(^|[^[:alnum:]_])[A-Z]{2,10}-[0-9]{2,6}([^[:alnum:]_]|$)|(^|[^[:alnum:]_])internal (only|doc|wiki)([^[:alnum:]_]|$)'
HEDGE_FREE='(^|[^[:alnum:]_])proves([^[:alnum:]_]|$)|(^|[^[:alnum:]_])obviously([^[:alnum:]_]|$)|(^|[^[:alnum:]_])clearly (shows|demonstrates)([^[:alnum:]_]|$)|there is no reason to'

report "Marketing superlatives — back with a measurement or cut" "$SUPERLATIVES"
report "Absolute claims — almost always false at the edges" "$ABSOLUTES"
report "Adoption claims — need a source or they read as invented" "$ADOPTION"
report "Rhetorical certainty — soften or show the evidence" "$HEDGE_FREE"
report "Internal identifiers — rewrite for an outside reader" "$INTERNAL"
report "Undated version references — pin the version and date the post" "$VERSIONS"
[ "$skip_numbers" -eq 1 ] || report "Quantitative claims — each must appear in the claim ledger" "$NUMBERS"

if [ "$findings" -eq 0 ]; then
  [ "$quiet" -eq 1 ] || echo "No lexical findings. The claim ledger and benchmark disclosure still need a human pass."
  exit 0
fi

[ "$quiet" -eq 1 ] || printf '\nFindings are candidates. Keep any line whose evidence is in the post.\n'
exit 1
