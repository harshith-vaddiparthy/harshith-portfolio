# Engineering blog post patterns

Section order, proportions and traps for each pattern. Read only the one you picked.

## Contents

1. Bug Hunt
2. Rewrote It in X
3. How We Built It
4. Benchmarks and Test Results
5. Lessons Learned
6. Thoughts on Trends
7. Non-markety Product Perspectives
8. Explainer / deep dive
9. Choosing between two candidates

Patterns 1-7 are the pattern set of _Writing for Developers: Blogs that get read_ (Piotr Sarna and Cynthia Dunlop, Manning), one chapter each; the names here are the printed ones. Each pattern's stated purposes below come from that book. Pattern 8 is this skill's own addition - real, but not part of that published set.

**The percentages are this skill's own baseline, not a measured finding.** They assume a 1,500-2,500 word post and exist to keep the credibility section from being squeezed out.

- Scale them to your post's actual length.
- Treat the opening's 10-15% ceiling as a working rule of thumb rather than a threshold anyone has validated.

---

## 1. Bug Hunt

A debugging investigation the reader follows like a mystery. Its stated purposes:

- dumping hard-won knowledge
- raising awareness of a bug others will hit
- honestly, bragging

| Section          | Budget | Contents                                                          |
| ---------------- | ------ | ----------------------------------------------------------------- |
| Symptom          | 10%    | What broke, as observed: error text, graph, user report, alert    |
| First hypothesis | 15%    | What you assumed and why it was reasonable                        |
| Investigation    | 30%    | What you tried, including the wrong turns - commands, logs, diffs |
| Root cause       | 20%    | The actual explanation, stated plainly                            |
| Fix              | 15%    | The change, with code or config                                   |
| Lesson           | 10%    | What generalises beyond this bug                                  |

The dead ends are the value. A debugging story where the first hypothesis is correct reads as reconstructed after the fact, and readers say so.

Traps:

- sanitising the timeline until nobody looks incompetent
- withholding the error text that would let a reader find the post by searching for it
- ending on the fix with no generalisable lesson

Traps specific to a _public_ version of an internal incident review:

- leaving individual names, ticket IDs or internal service codenames in
- copying the internal document's impact figures without deciding to publish them
- forgetting that an outsider needs a reason to care, which an internal postmortem never has to supply

Keep the blameless framing - the post explains the conditions that allowed the failure, not who typed the commit.

## 2. Rewrote It in X

A migration story. The reader's real question is: should I do this too?

| Section              | Budget | Contents                                                           |
| -------------------- | ------ | ------------------------------------------------------------------ |
| The pain             | 15%    | What forced the decision, with the numbers that made it undeniable |
| Why this option      | 10%    | Alternatives considered and why they lost                          |
| Migration mechanics  | 30%    | Phased or big bang, tooling, dual-run period, rollback plan        |
| What went wrong      | 15%    | Regressions, surprises, the cost nobody budgeted                   |
| Results              | 20%    | Before/after, same measurement method on both sides                |
| Would we do it again | 10%    | Under what conditions, honestly                                    |

Traps:

- omitting "what went wrong", which turns the post into a press release
- measuring before and after differently
- crediting the language or framework for wins that came from rewriting badly-understood code the second time

## 3. How We Built It

An architecture walkthrough. The reader wants the decisions, not the feature list. Stated purposes:

- staking a claim on something new
- demonstrating the team's capability
- collecting free peer review from readers who have solved the same problem

| Section              | Budget | Contents                                                   |
| -------------------- | ------ | ---------------------------------------------------------- |
| Goal                 | 10%    | What the system must do, in user terms                     |
| Constraints          | 15%    | Team size, deadline, budget, compatibility, existing stack |
| Architecture         | 20%    | High-level design, ideally one diagram                     |
| Key decisions        | 30%    | Each one: options, choice, what it cost                    |
| What we would change | 15%    | Hindsight, specific                                        |
| Takeaways            | 10%    | Principles a reader can port                               |

Traps:

- presenting decisions as objectively correct rather than as trade-offs under stated constraints
- hiding the constraints, which makes every decision look arbitrary
- a diagram that shows boxes nobody named in the text

## 4. Benchmarks and Test Results

Classify the post first:

- comparing your product against a competitor (benchmarketing)
- measuring something using your product (subtle benchmarketing)
- measuring something independent of it (community service)

The first owes the most disclosure and gets the least benefit of the doubt.

| Section        | Budget | Contents                                                |
| -------------- | ------ | ------------------------------------------------------- |
| Question       | 10%    | What is being measured and why anyone cares             |
| Methodology    | 20%    | Hardware, versions, workload, configuration, run count  |
| Results        | 25%    | Data first: tables, charts, absolute values with ratios |
| Analysis       | 25%    | What it means, plus where the method could mislead      |
| Recommendation | 15%    | What a reader should do given this                      |
| Reproduction   | 5%     | Scripts, raw data, environment definition               |

Methodology precedes results, always. A reader who does not trust the setup does not read the numbers.

Traps:

- tuning your side only
- a single run reported as if it were stable
- geometric-mean summaries that hide one catastrophic case
- comparing versions released years apart without saying so
- shipping only a table when the pattern is read visually and expects a chart

## 5. Lessons Learned

Reads as a diary: reflections and ruminations, written so a single lesson imprints on the reader. Stated purposes:

- self-reflection
- storytelling
- kickstarting a conversation

| Section     | Budget   | Contents                                                          |
| ----------- | -------- | ----------------------------------------------------------------- |
| Context     | 10%      | The experience that produced the lessons - this is your standing  |
| Lessons     | 20% each | Three to five, best first, each anchored in one specific incident |
| Meta-lesson | 10%      | What ties them together                                           |

Traps:

- lessons that could have been written without the experience ("communication matters")
- more than five, which dilutes every one of them
- abstract phrasing with the concrete incident removed for confidentiality - if it cannot be told, cut the lesson

## 6. Thoughts on Trends

An opinion piece with a spine. Stated purposes:

- keeping a continuous presence in the conversation
- looking back at how a technology aged
- trying to shape where it goes next

| Section      | Budget | Contents                                       |
| ------------ | ------ | ---------------------------------------------- |
| Observation  | 15%    | What you are noticing, concretely              |
| Evidence     | 25%    | Data, examples, things that actually happened  |
| Steelman     | 15%    | The strongest version of the opposing view     |
| Thesis       | 25%    | Your position, informed by the counterargument |
| Implications | 20%    | What a reader should do differently            |

The steelman separates analysis from a hot take. Build the opposing case well enough that someone holding it would recognise their own position.

Traps:

- an opinion post with no evidence section
- a steelman built from the weakest opponent
- predictions with no time horizon, which can never be wrong and therefore say nothing

## 7. Non-markety Product Perspectives

A post about your own product that an engineer still finishes. The product is the setting, not the subject: the reader is there for the technical problem and the behind-the-scenes detail, and the product registers subliminally. Stated purposes:

- product placement
- teasing what is coming
- hiring

The section order below is this skill's own construction, not the book's: the book names this pattern, its purposes and its characteristics, but prints no section order for it.

| Section                 | Budget | Contents                                                                  |
| ----------------------- | ------ | ------------------------------------------------------------------------- |
| The engineering problem | 20%    | Stated in terms someone outside the company also has                      |
| Who we are              | 5%     | One plain sentence: what you build, what you sell, why you hit this       |
| How it actually works   | 40%    | The real mechanism - schemas, algorithms, failure handling, what is naive |
| What it cost            | 20%    | Trade-offs accepted, work abandoned, the parts still unfinished           |
| Where it goes           | 15%    | What is next, without a roadmap promise                                   |

Traps:

- leading with the announcement instead of the problem
- feature-listing where the mechanism should be
- a "who we are" paragraph that turns into positioning copy
- burying the commercial interest instead of stating it once, plainly, early

If removing every product name would leave nothing behind, this is an announcement, not a post.

## 8. Explainer / deep dive

| Section             | Budget | Contents                                                   |
| ------------------- | ------ | ---------------------------------------------------------- |
| Why it matters      | 10%    | The problem understanding this solves                      |
| Simple mental model | 20%    | The accurate 80% version, useful on its own                |
| Going deeper        | 40%    | Nuance, edge cases, implementation reality                 |
| Misconceptions      | 15%    | What people get wrong, and why the wrong model is tempting |
| Implications        | 15%    | What changes in the reader's work                          |

Traps:

- starting with a definition
- complicating before the simple model has landed
- assuming a concept the reader never met - every concept must either be a stated prerequisite or introduced earlier in the post before a later section leans on it

## 9. Choosing between two candidates

When the material fits more than one pattern, apply these in order:

1. **Fillability.** Strike every pattern whose credibility section you cannot fill: the dead ends, the "what went wrong", the methodology, the steelman. This is a gate, not a preference - a struck pattern leaves the menu.
2. **Efficiency order.** Among the survivors, take the highest in `SKILL.md`'s pattern table, re-ranked against the interview's date, one-off-versus-compounding and effort-ceiling answers.
3. **Reader question**, only to separate two survivors sitting at the same position. Which question does the audience have?
   - "why is it broken?" (bug hunt)
   - "should we switch?" (rewrite)
   - "how does it work?" (explainer / how we built it)
   - "which is faster?" (benchmark)
   - "what did you learn?" (lessons)
   - "where is this going?" (trends)
   - "what is inside the thing you sell?" (non-markety product)
4. **Split rather than merge.** Two patterns in one post produce a piece that satisfies neither reader. Publish the second one separately and link them.
