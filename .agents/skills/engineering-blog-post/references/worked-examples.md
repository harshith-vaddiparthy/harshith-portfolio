# Worked examples

Filled artefacts to copy the shape of. The technology in these examples is invented for illustration; the structure is what transfers.

## Contents

1. A filled claim ledger
2. A benchmark disclosure block
3. Marketing voice, rewritten
4. A limitations section that works
5. An edit-mode fix list
6. A product post that fails, and the same material that works

---

## 1. A filled claim ledger

Build this before drafting. Column three is what the technical reviewer confirms.

| Claim as drafted                                     | Class         | Evidence / action                                                                       |
| ---------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------- |
| "p99 dashboard latency dropped from 1.4s to 220ms"   | Measured      | Load test, 12 runs, script in `bench/dashboard.js`; reviewer: @lena                     |
| "the cache invalidation bug shipped for two weeks"   | Shown         | Link the revert PR and the incident issue                                               |
| "read-through caching is the standard approach here" | Sourced       | Link the pattern's canonical write-up, not a blog aggregating it                        |
| "this is the fastest dashboard in the category"      | _unsupported_ | **Cut.** No cross-vendor measurement exists                                             |
| "we should have measured before optimising"          | Opinion       | Keep, first person, marked as judgement                                                 |
| "customers reported timeouts daily"                  | _unsupported_ | Downgrade to "we saw timeouts in our own monitoring" - support data cannot be published |

Two of six claims did not survive. That ratio is normal, and catching it here is cheaper than defending it in the comments.

## 2. A benchmark disclosure block

Place it before the results, not in an appendix.

```markdown
## How we measured

- Hardware: 3 × c6i.4xlarge (16 vCPU, 32 GB), same AZ, dedicated tenancy
- Versions: ourdb 4.2.1, otherdb 15.6 (latest stable on 2026-08-14)
- Workload: 70/30 read/write, 200 M rows, 64 concurrent clients, 10-minute run
- Tuning: both systems tuned by the vendors' own production checklists;
  configs committed in `bench/config/`
- Runs: 12 per configuration, discarding the first two as warm-up;
  results are medians, whiskers are p5/p95
- Reproduce: `make bench` in github.com/example/db-bench (commit a1b2c3d)

We are the authors of ourdb. We invited the otherdb maintainers to review
the configuration before publishing; their comments are in issue #211.
```

The last paragraph is what separates a benchmark from an advertisement. If nobody reviewed the other side, say that instead - an unreviewed comparison labelled as such still has value.

## 3. Marketing voice, rewritten

Each pair keeps the same fact and removes the claim the evidence cannot carry.

```
Bad:  Our revolutionary new pipeline delivers blazing-fast performance at any scale.
Good: The new pipeline processes our largest customer's nightly batch in 6 minutes
      instead of 41. We have not tested it above 200 GB per batch.

Bad:  We leveraged best-in-class technologies to build a seamless developer experience.
Good: We built it on Postgres and a single Go binary, because the team already
      operates both and we did not want a second on-call rotation.

Bad:  Migrating was a game-changing journey that transformed our architecture.
Good: The migration took four months, two more than planned. Most of the overrun
      was a serialization format we had not realised three services depended on.

Bad:  Unlike legacy solutions, our approach requires zero configuration.
Good: The defaults work for single-region deployments. Multi-region still needs
      the six settings documented here, and we have not automated them.
```

The pattern in every rewrite: replace the adjective with the number, and follow it with the boundary of the claim.

## 4. A limitations section that works

```markdown
## Where this does not apply

- Workloads under roughly 10k rows per workspace saw no measurable change.
  The cache adds a hop and, for those, it is pure overhead.
- We tested on Postgres 16 only. The query rewrite relies on a planner
  behaviour we have not verified on 15 or on any fork.
- Invalidation is time-based, not event-based. Readers can see data up to
  30 seconds stale, which is fine for dashboards and wrong for billing.
- We did not measure memory pressure under sustained write bursts. If your
  write path looks nothing like ours, our numbers say very little.
```

Each item names a boundary a reader can check against their own system. "Your mileage may vary" does none of that work.

## 5. An edit-mode fix list

Return this shape when the user brings an existing draft. Ordered by trust damage, not by position in the document.

```markdown
### Blocking (fix before publishing)

1. §"Results", line 84 - "10x faster than the alternatives" has no measurement
   in the post. Either add the benchmark disclosure block or cut the claim.
2. §"Intro", line 12 - "trusted by thousands of engineers" is an adoption claim
   with no source. Cut, or replace with a number you can point at.
3. Code block, line 130 - no imports, no version pin, and `client.run()` was
   renamed in 3.0. A reader copying this gets an error on the first line.

### Strong (fix unless you disagree)

4. No limitations section. The post recommends an approach and never says where
   it fails; add three or four concrete boundaries.
5. §"Architecture", line 61 - "PROJ-4471" and "the Falcon service" are internal
   names. Rewrite in terms a reader outside the company can follow.

### Optional

6. Opening runs 380 words before the first substance. Cutting to ~150 puts the
   surprising number on the first screen.
7. Register drifts to "we are excited to announce" in the closing paragraph;
   the rest of the post is in the engineer's voice.
```

Quote the offending line rather than paraphrasing it - the author needs to find it, and seeing their own sentence next to the objection makes the case better than any summary.

## 6. A product post that fails, and the same material that works

The most tempting mistake on a company blog is writing about your own product as if the product were the story. Both outlines below come from the same engineering work: a new query planner.

**Fails - an announcement wearing an engineer's voice.**

```markdown
# Introducing Adaptive Query Planning in Acme 5.0

- Why we built Acme (company origin story, 400 words)
- Introducing Adaptive Query Planning (feature list, 6 bullets)
- Benefits for your team (faster, simpler, scales)
- Benchmarks (one bar chart, no methodology)
- Get started today (signup CTA)
```

Delete every occurrence of "Acme" and nothing remains. There is no mechanism, no cost, no boundary - a reader on a different stack learns nothing and leaves.

**Works - the same material, product as setting.**

```markdown
# Why our planner kept choosing the wrong join order

- The symptom (a real query, its plan, and the 40s it took)
- Why the cost model lied (stale statistics on a skewed column - the mechanism)
- Who we are (one sentence: we build Acme, a hosted OLAP database)
- What we changed (sampling strategy, with the data structure and its code)
- What it cost (planning time up 8ms; no gain on uniform data;
  still wrong for correlated predicates)
- What we still get wrong (named, specifically)
```

The rule underneath: an engineer at a company that will never buy your product should be able to take something home. State the commercial interest once, plainly, and early - hiding it is what makes a reader re-read the whole post looking for the sales pitch.
