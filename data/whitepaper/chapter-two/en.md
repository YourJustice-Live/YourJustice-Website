## <a id="how-the-platform-works"></a>Chapter 2 - How the Platform Works

In this chapter we will focus on key aspects of the YJ platform that will enable an alternative system of social relations between people joining the network.

**In short**: we have developed an easy-to-understand standard for describing social relationships and called it YJML. The foundation of the system is a tile. This is a description of any model of social relations declared by the YJML standard. People will be represented on the platform through a system of profiles and will be able to consolidate into digital jurisdictions based on shared values, which are described in the YJML. The organization of the economy is accomplished through cross-chain. On the basis of the platform it is possible to create your own legal systems, decentralized marketplaces. Fairness and competition will be achieved through a score system. Disputes can be resolved with a judicial engine.

We will describe each of these processes in more detail.

### <a id="tiles"></a>Tiles - a framework for describing role systems

#### Role Systems

Throughout a person's life they may encounter a large number of tasks. In order to solve a task, it is necessary to perform this or that action regarding the outside world, other people or oneself. In addition, at different moments in time a person performs different roles in different structures of social relations.

These structures can be simple, fluctuating between 2 roles, and very complex, which describe the relationship between a huge number of roles.

For the structure to be alive and for the interaction described in it to take place, each of the roles must be cast by a real living person.

> Here are some examples of simple role structures: a mother gives her son a birthday present; tenants of an apartment agreed to wash their dishes immediately after eating; friends play cards for money. Examples of complex role structures: corporation, war, DAO, law, trial, state.
>

Every person in a living, relevant structure has at least a rough idea of what interests, intentions, and preferences other role-players have. He assumes what rights these people have and what actions they will take at particular points in time. The more a person learns about the other role performers and the agreements included in the role system, the more effectively they can solve their problems within the role play that is taking place.

**The users of the platform, united into digital jurisdictions, will also use role structures. We designed tiles to describe them.**

#### What are tiles?

A tile is an YJML-encoded description of the social relations role structure. We called it a tile because they really look like actual tiles or bricks stacked together.

> YJML is the standard we invented to describe social relations. It can be easily understood by a person without any training or education, as well as by a computer that will execute it.
>

#### What kind of tiles are there and how to describe them

Tiles are flexible enough to describe any role structure within any social relations that need to be executed according to an instruction or a scheme. Here are some examples of such social relations: jurisdiction, organization, law, contract, agreement, rule.

Tiles can be formed textually, using the YJML standard, or through a graphical interface.

Tiles are filled with two types of information: a tile function and a constructive description that will show how the tile will execute its function.

#### Tile function

Tile function is a description of an event, phenomenon, or product that all role performers will reach if they perform all the actions specified within that tile.

<Code>💡 An example of a tile function:

The CO2 level does not exceed the value of X at any point in the atmosphere.

</Code>

#### Constructive description of a tile

A constructive description is information about roles and actions within those roles that must be adhered to in order to execute tile function.

A constructive description of a tile may include:

- **Roles specification**
A list and a description of all the roles of the projected social relationship and the rights those roles have. This is the only mandatory element of a constructive description of a tile, other elements are optional.
- **Actions.**
Description of the actions themselves, the rights to which are transferred to various roles.
- **Conventions**
A list and a description of all other rules and regulations that are impossible to describe through the sections "Roles specifications" and "Actions", but their presence and description in a tile is mandatory.
- **Statuses specification**
A list and a description of statuses of a tile. If a tile is designed as a process, each status reflects a stage of a tile at a certain point in time. For example: a contract may go from 'signed' to 'completed', and from there to the status 'completion is challenged'.
- **Types**
 A tile can describe the social relations of the tiles associated with it, as commercial codes describe the rules for the relationship between a LTD or GmbH.
- **Wallets link**
A link to the wallets and addresses on the blockchain that will be used by the smart contracts referencing this tile.

The set of elements listed above gives enough flexibility to describe role systems with any level of complexity.

Examples of YJML-encoded tiles can be found in the section below and in Annex 1.

#### Why tiles and why this way of their description?

You may wonder why we decided to make tiles, and did not confine to smart contracts or existing legal documents.

Let's elaborate on this.

To describe any structure of social relations that we want to see in the new society of the future, we will need a standard that provides:

- rapid understanding by any person
- flexibility and ease of editing
- a true history of change
- accuracy, completeness and unambiguity of the language used
- universality and compatibility of all elements to each other

That's why we conceived tiles as small, unified blocks filled with accurate information that can be flexibly and differently linked to each other to form smart laws and smart contracts.

#### Why tiles and not modern legal documents?

* **Reason 1**: The structure of any document written in legal language is linear.

In fact, you can only make changes to such a document by creating new chapters at the beginning or end of the document, then adding references to these paragraphs. It is not convenient, long and not flexible.

* **Reason 2**: Documents written in legal language often contain ambiguous language.

Inaccuracy creates legal "loopholes" that allow different interpretations of a document or a thesis within it. The language of the law may not correspond to its spirit. And it is often used in law, in court, and in law enforcement practice.

* **Reason 3**: Legal language is extremely difficult to understand and use.

> Modern legal documents take hours of time to figure out. Sometimes you can't do without a legal education.
>

After studying a code, it can be difficult to understand how its provisions are implemented in real life, because the laws are often detached from law enforcement practice.

**To summarize, no linear structured language currently provides the level of flexibility and accuracy required to quickly create and adjust models of role structures.**

#### Why tiles and not smart contracts?

Smart contracts do have the highest possible level of accuracy and enough level of flexibility to describe public interaction. But they have several important disadvantages that explain why we don't use them.

* **Reason 1: Smart contracts require increasing fees for their execution.**

The more people start using a particular network to execute smart contracts, the higher the cost of execution becomes.

> Example: The execution of one simple smart contract on the Ethereum blockchain can cost more than $100.
>

In popular blockchain networks, the cost of executing smart contracts is too high and it only increases. And using smart contracts in less popular (and therefore less decentralized) blockchain networks is not as elegant and can be fraught with consequences. The network could be monopolized by a group of people who suddenly want to change the terms.

A well-informed reader will notice the PoS (Proof-of-Stake) algorithm, where the cost of execution is not so high. But we hope to convince such a reader in the next paragraph.

* **Reason 2: Barrier to entry**

The flexibility of smart contracts is also a disadvantage. Smart contracts are written in Solidity Turing-complete programming language. Therefore:

- To write a smart contract, you need to understand how the blockchain works very well and know Solidity.
- To read a smart contract, you also need to know Solidity language.
- You need a very deep knowledge of Solidity (better than the person who wrote the contract) and know the principles of blockchain to notice flaws in a smart contract. You can't read it fluently and correct it if you're not a professional.

Even visual smart contract editors don't simplify the task, because you're still dealing with a Turing-complete language which takes months to learn and years of practice to perfect.

**The YJML language we propose is much simpler, because it is designed exclusively for describing social relations.** It can be accomplished by watching a few instructional videos and getting a little practice. This removes the problem of the barrier to entry.

> In addition, we are designing a visual editor for tiles, which will make the process of working with them even faster and cheaper.
>

### <a id="humanity"></a>Sample Tiles: Humanity

Every living person after registration on the platform immediately receives the role of human.alive in Humanity. Humanity is not really a jurisdiction, but rather an environment shaped by human DNA and the diversity of human culture.

Cultures and their conventions are very different from each other. That’s why the convention of Humanity is deliberately made so that it can be accepted without question by anyone: from idealists and humanists to adherents of opposing views.

Humanity can be seen as a certain "layer" between a person and their citizenship in a jurisdiction. It is important in order to secure to everyone with access to the platform a very small set of truly inalienable rights. We are talking about rights, for the attainment of which it is enough not to hinder a person - the ability to create or leave any jurisdiction.

This is what it looks like in the Humanity declaration:

<Code disclosed="true">
yaml
Humanity:
	title:
		en: Humanity
		...
	tile:
		roles_spec:
			human:
				alive:
					rights:
						- createJurisdiction
						- leaveJurisdiction
						- inviteHuman
		conventions:
			values:
				Life:
					statement:
						Any human life is priceless and should be respected
						and protected by others
				Freedom:
					statement:
						Any human has right to live by one's own rules
						and values
</Code>
(please note that this is only a part of the declaration, not a complete one)

**Tile function:**
Provide basic inalienable rights for people (at least for those who have access to the Internet)

**Role specification:**

Actions the role can perform:

1. Create a jurisdiction and customize its operation as one sees fit
2. Leave the created jurisdiction
3. Invite another person to the platform

Further we will discuss how exactly YJML works and what "Create Jurisdiction" and "Leave Jurisdiction" mean in the documentation on YJML.

A question of how Humanity is better than any other international environment is also worth a separate article and will consider it later.

### <a id="silence-lovers"></a>Sample Tiles: The Tribe of Silence Lovers

Imagine a tribe of silence lovers gathered somewhere far away from civilization. The residents of the tribe behave in such a way as to minimize any noise around them. And they also have apps on their phones that listen to noise levels.

A tile for such a community might look like the one described below.
Tile function: Produce a minimum amount of noise for each of the participants

**Role specification:**
1. Adept of the Cult of Silence.
Rights of the role:
	- `askForSilence` Send a polite instant message to another person asking them to be quiet
	- `createCase` Sue a person who is making too much noise
	- `buyEarphones` Buy headphones with a high level of protection
	- `sendSilentMessage` Send a silent message, turning all the words into polite ones
	- `buySilentCar` Buy a new vehicle that produces minimal noise
	- `setupNoizeListener` Install an application that monitors noise levels

2. Judge of the Cult of Silence
Rights of the role:
	- All the Actions of the role "Adept of the Cult of Silence".
	- `sendJudgeProposal` Resolve disputes of tribe members who sued to the court
	- `makeJudgement` Decide what the fines for producing excessive noise will go to

3. Application that monitors noise levels
Rights of the role:
	- `uploadNoizeData` Monitor noise levels through smartphone microphones in real time, recognize voices
	- `chargeNoizeMaker` Issue a fine to a tribe member for exceeding a decibel level that is considered by the tribe as unacceptable

**Conventions:**
Every resident strives in every possible way to produce as little noise as possible.

**Statuses specification:**
Is not required for this tile.

**Wallet link:**
All the fines for producing excessive noise go into the tribe's wallet.

### <a id="sample-tiles"></a>Sample Tiles: Contract

A standard and fairly simple contract that can be used by any users of the platform for simple economic interaction.

**Tile function:**
All terms of the agreement made between people are fulfilled to the fullest extent.

**Role specification:**
1. Customer
Actions the role can perform:
	- `fillContract` Fill in the contract information, specify the subject matter of the agreement, the legal system and select the mediator
	- `setMilestone` Clarify the expected result of the step and the conditions under which the result will be considered achieved
	- `stakeMilestone` Put the amount of money required for Milestone on the contract
	- `closeMilestone` Send the amount of money lying on the contract to the contractor and receive the copyrights of the work from them
	- `reviewContractor` Leave a review for the contractor, raising or lowering their score
	- `callMediator` Pass the contract on to the mediator
	- `reviewMediator` Leave a review for the mediator, raising or lowering their score
	- `leaveContract` Leave the contract, send the money to the mediator

2. Contractor
Actions the role can perform:
	- `fillContract` Fill in the contract with the conditions under which one is ready to provide the service
	- `setMilestone` Clarify the expected result of the step and the conditions under which the result will be considered achieved
	- `sendMilestoneResult` Send the result of the Milestone to the contract for the customer to review it
	- `reviewClient` Leave a review to the customer, raising or lowering their score
	- `callMediator` Pass the contract on to the mediator
	- `reviewMediator` Leave a review to mediator, raising or lowering their score
	- `leaveContract` Leave the contract, send the money to the customer

3. Mediator
Actions the role can perform:
	- `acceptMediation` accept the mediator's role
	- `resolveContract` decide to whom and in what proportion the funds from the contract will be sent

**Conventions:**
Are not required for this tile.

**Statuses specification:**
1. Negotiating the terms
 All parties join and sign the contract
2. Negotiating the milestone.
 The customer proposes the terms, describes the expected result, and the contractor asks for clarification and calls a price. The process is repeated until customers and contractorss agree on all issues.
 Next, the customer has to freeze the money on the contract
3. Realization
 The contractors fulfill the terms and present the result to the customers.
4. Acceptance
 Customers check the completed work.
 If they have adjustments, they pass them on to the contractorss and ask them to make them.
  If there are no adjustments and the actual result is completely as expected, the customer sends the money frozen on the contract to the contractor
 If there is a dispute, the customer transfers the management to the mediator.
5. Mediation
 Mediator reviews the relationship in the contract and defines how the stake of the contract will be allocated
6. The contract is closed

**Type of Tile:**

Contract (description of contractual relationship)

**Wallet link:**
An escrow account connects to the contract. The money from the account will be sent to the contractor only when the customer approves it (or the mediator accepts the work). If the performance of the contract involves remuneration for the jurisdiction and for the mediator, then most of the money from that account will go to the contractor and the remaining small part will go to the mediator and the jurisdiction.

### <a id="standardized-smart-law"></a>Tile samples: YJML standardized smart law

Let's say, a jurisdiction introduces a law requiring a judge to report to residents about his or her work every two weeks. The contents of the report are as follows: a list of cases the judge is working on; a list of cases closed during the two-week period; the amount of money received during the two-week period for judicial work. The report form is an open blog entry between 00:00 and 24:00 UTC +0 every Saturday.

Penalty for one missed or incomplete report: forfeiture of two-week wages. Penalty for repeated failure to report in time: dismissal from the post of judge.

Conceptually, a smart-law tile will look something like this:

**Tile Function:**

A judge provides residents of the jurisdiction with regular reports on their work.

**Role specification:**

1. Judge
Actions the role can perform:
	- Create a report on one’s work, which will include sections:
		- List of current cases - A list of cases the judge is working on
		- Recently closed cases – A list of cases closed in a two-week period.
		- Income - The amount of money received for judicial work in the past two-week period.
	- Publish a report on one’s open blog between 00:00 and 24:00 UTC +0 every Saturday.

2. Smart Law
Actions the role can perform:
	- Check once every two weeks on Sunday if the judge has released the report on time and if the report includes all the right sections.
	- Penalize the judge if the report was not released on time, did not include the right sections, or was not released at all.
	- Keep a record of the fact that the law was broken.
	- Remove the offending judge from the role of "Judge" through removal of the role from the profile.

**Conventions:**

Are not required for this tile.

**Statuses specification:**

Is not required for this tile.

**Type of Tile:**
Smart-law (self-executing law description)

**Wallet link:**
This smart-law does not require a wallet or an account.

-------------

If you want to learn more about the technical side of YJML and to see other examples of tiles described by the YJML standard, please go to Chapter U or Appendix P.
Scores

-------------

## <a id="scores"></a>Scores

As living beings are striving to improve their living conditions, they consciously or unconsciously evaluate the objects around them and even other living beings. This is natural.

The world is full of score systems: credit scores, knowledge scores in schools, achievements in video games, number of followers and likes, amount of money in bank account, scores on Google Maps, cab driver reviews.

We believe that scores themselves are not a bad thing, because in every value system there are more and less important things.

Problems arise when the scoring process, or rather the value system behind it, is monopolized by one group of people (whether it be Chinese social credit system or the amount of capital as a religion in the United States). In such cases, other people are forced to conform to the system and its criteria in order to gain access to the benefits vital to them.

**We believe it is time to decentralize scores, and to offer people a tool that allows them to directly influence the behavior of those they rank.**

### Why we need scores

We believe an ecosystem of scores is necessary for the platform due to 3 key reasons:

**Reason 1**. Locally, scores help you to quickly understand whether it's worth interacting with a person, tribe, organization or their products.

**Reason 2**. In medium term perspective, scores allow you to influence the quality of people's collaborative and cooperative activities.

**Reason 3**. Globally, score system is a motivation for action. Accordingly, scores and rewards focused on planetary values can, for example, help not only unite communities and gain subscribers, but also save the Earth from environmental disasters or accelerate technological or ethical progress.

### How scores work
#### The relativity of scores

> Each entity being scored gets separate scores relative to each jurisdiction and humanity
>

True scores are relative in the sense that each person lives their own life and chooses for themselves what is good and what is bad for them. But it is an extremely long and time-consuming process to make independent scores for all people and phenomena in the world.

We thought it was logical to place value systems not on the level of individuals, but on the level of communities.

We allowed tribes to create their own systems of values and rules, as well as score points they give for following or breaking those rules (Yes, like at Hogwarts! 5 points to Gryffindor!)

Everyone in the community can write scoring entries not only about people within the community, but also about any other person, tribe and organization in the system.

Moreover, each person decides for themselves which scores they want to pay attention to and which they will turn a blind eye to.
For example, a person may be absolutely indifferent to what citizens from the opposite side of the globe or people who hold different values think about them.

Therefore, there is nothing to worry about, if you are scored by a community whose opinion is not important to you, because you don't want to cooperate with them. But if you are scored by those who are important to you, that's a good reason to listen carefully.

#### Two sides of the scale

Obviously, one scale is not enough to evaluate a score. In that case, it would be possible to do "great evil" and then compensate for it with lots of little good deeds.

We need at least two scales: positive and negative. Then no amount of positive deeds will compensate for the negative.

#### Humanity Score

Can there be a common score system for all the humanity that will qualitatively reflect the interests of everyone? We are very interested to know the answer to this question. Therefore, we decided to make a Humanity score.

It is a separate score with 2 scales, which is calculated as an index based on all other scores.

The formula will be posted in the public domain. Everyone will be able to suggest adjustments to the calculation system of the global score.

Surely someone will try to "hack" this formula to increase their score. Others will look for vulnerabilities and options for improvement.

To influence the calculation of Humanity score, you can join the open product development taking place on GitHub (link), and we're already getting ready to monitor this great cause for controversy!

#### Where to see the scores

If you go to a person’s, community’s or organization's profile page, you'll see 3 kinds of scores:

- Profile's score in its primary jurisdiction
- Humanity score
- Profile score in your jurisdiction (if this score was previously assigned to the profile)

If you expand the full list of scores, you’ll see scores relative to other communities.

#### How to influence the score. Earning and losing points

The rules for earning and spending (losing) points are always determined by the community that creates the score system. We only provide the necessary information and tools to set it up.

Change of score usually happens:

- Through rewards from people (for example, in gratitude for a well done contract execution)
- Through a smart law (for example, you can give everyone 5 points of positive score when joining a jurisdiction)
- Through a court decision (for example, you proved in court that a factory degrades the environment and downvoted both the organization itself and its responsible persons)

#### Challenging the points

Let's say you received a negative score, whether it’s deserved or it’s just a mistake. You have options:

- Challenge the addition of score points directly in the jurisdiction that set up the score system.
- Agree with the person, jurisdiction, or organization that the damage you caused them will be compensated.
- Talk to the initiator of the points addition (it may be enough to simply explain your position or apologize for the inconvenience caused).

#### Score meltdown

So, you have received a positive or negative score and have not challenged it. Will it stay that way forever?

Reminder: rules for changing scores are always set by the jurisdiction. You can set them up so that the score loses its value over time, for example by 5% or 10% once a year. The old will be forgotten. And for the new one, you will have to do new deeds to keep your score.

In addition, a jurisdiction can calibrate the system so that only certain scores would be devalued and others would remain unchanged.

#### Additional scales

Every jurisdiction will be able to create custom scores in addition to the basic ones. If the value system requires it.

Here is an example of how the process will look like: an environmentalist tribe called “Zero waste” adds an additional scale showing the weight of the garbage a person throws out every day. Based on this score, the tribe can rate each of its residents' or organizations' commitment to the "zero waste" value.

#### Jurisdiction indices

We expect jurisdictions to compete for members and offer their tribe's services on the marketplace. Therefore, everyone will be able to come to the platform and choose the right community for them.

To make it easier to choose, we've added several indices to the system:

- number of residents
- percentage and speed of closing court cases
- level of violence within the jurisdiction
- transparency and openness of legal institutions
- consistency and completeness of laws in the jurisdiction

Same as with the Humanity score, the work on the tribal indexing system will be managen in an open manner. Each user of the platform will be able to influence the formation of filters for the indices.

#### Why our score system is going to work?

Here are a few key messages that confirm availability of our score system.

#### 1. Freedom of choice

On the platform every person will be able to choose a jurisdiction which is closest to their values and they will always be able to change it for another if desired.

The score system inside the communities will be designed to encourage residents to take conscious action to achieve these values. The choice of jurisdiction, and therefore, score system, is purely a voluntary process, devoid of manipulation and elements of violence.

Once a person receives a negative score from residents of another jurisdiction, they will inevitably consider whether they should pay attention to the opinions of those people. If a person is rated by those whose opinions are really important to them, they will listen and perhaps change their behavior. And it will be their own decision. If this opinion doesn't matter to a person, they can hide that score from themselves, but other people who care about the opinions of people in that jurisdiction will still to see it.

#### 2. Maximum transparency

> Every score and every transactions aimed at changing it are permanently open for viewing. No score can be deleted or hidden.
>

The openness and transparency of institutions should be a competitive advantage (after all, one can leave a community at any time).

We expect jurisdictions to voluntarily provide their residents with all internal data, without hiding information.

Therefore, every person at any point of time will be able to find out what they got points for and why for this particular score, and what should they do if they need to challenge what happened.

#### 3. No corruption of scores

Every score system has vulnerabilities. They will eventually be exploited to the advantage of whoever discovers them.

Our score ecosystem also has its flaws. However, we expect its proper operation to be secured by one unwavering pattern. Namely, if people don't agree with the score they receive from a jurisdiction, they will simply leave it.

In addition, the contradictory Humanity indices will evolve to better recognize unfair scores.

#### Taming Cancel Culture

Cancel culture is a powerful Internet weapon that can make anyone's life difficult after just one careless statement made years ago.

We find the cancel culture an extremely effective way of expressing disagreement with, but we are not happy with the way people are "cancelled”. It often happens unsubstantiated, without any evidence. Having scores that can be challenged in court would allow using cancel culture in a fairer, more massive way. And here's why.

With all scores and their transactions in the public domain, one can see another person's actual level of reputation at any point of time. Or to demonstrate one's own.

If a person or a group of people (even those who haven't joined the system) regularly harm others, constantly receive negative score points, everyone who looks at their profiles will notice it. Based on this information, people will make a decision on further interaction. If the actions are unacceptable, friends, partners, and employers may quite expectedly turn away from the "pests." Cancellation will occur.
At the same time, the score ecosystem, along with fair courts, provides everyone with a mechanism to protect themselves from attempts to exploit the cancel culture for personal gain.

If someone wants to add some negative points to an innocent person without presenting any evidence and facts, the victim can easily parry. How? Either by pointing out the number of negative scores the offender has, or by filing a libel suit against him or her.

Within the YJ ecosystem, the cancel culture ceases to be wild and becomes a useful and meaningful tool for stigmatizing actions that do bring pain into our world.

### Scores summary

Scores are a complex area with a great number of variables. To make it easier for you to systematize the information, here are 7 short messages at the end of the chapter.

1. The ecosystem of scores is one of the foundations of social relationships on our platform.
2.	We implemented this system so that people understand who they are interacting with, and also have the ability to influence the reputation of those people.
3.	You can see all scores and transactions aimed at decreasing or increasing them in a person’s, organization’s, tribe’s or tile's profile.
4.	There are score systems created by jurisdictions that allow you to rate other subject on the platform through the lens of the jurisdiction's values.
5.	Humanity score evaluates each person, organization, jurisdiction, or tile based on a common formula. It is publicly available and is being improved by the joint efforts of the developers and users of the platform.
6.	The number of score points can be influenced through court judgement, smart law or simply at will (if the rules of the system allow it).
7.	We are confident that our ecosystem of scores is going to work, because it is focused on maximum transparency and freedom of choice, as well as supported by competition of jurisdictions.

## <a id="courts"></a>Courts

Courts are one of the key elements of the platform. Every user has the right to a fair court decision on any issue.

It is possible to sue:

- another platform user.
- a person not registered on the platform.
- a jurisdiction (operating on the platform or existing in today's world)
- an organization formed within a jurisdiction on the platform.
- an organization outside of the platform.

Since judicial proceedings take a significant amount of time, and there are tiles for day-to-day relationships, we expect people to go to court only for really meaningful, complicated cases. The rest of the cases involving violations of laws and regulations will be covered by automated systems or expedited procedures.

### Different values, but a unified court process

In all jurisdictions on the planet, a court works as follows: first it looks at the facts of the act, then it interprets them in terms of the law, and then makes a decision.

In jurisdictions with well-functioning jurisprudence, judges seek the optimal solution for the plaintiff and defendant on a case-by-case basis, thus often acting as mediators.

Such an arrangement has proven to work, but only if two conditions are met:

- Each of the litigation specialists shows professionalism in their work.
- None of the specialists responsible for the integrity of the litigation process is corrupt.

In the YJ ecosystem, both conditions are enforced by the score system, as tribe residents are expected to choose the most responsible people with the highest level of integrity and professionalism, and respectively with a high score of goodness and a low score of evilness, to serve as judges, attorneys and prosecutors.

If a court in a jurisdiction is not working properly, it is always a reason to move to another jurisdiction. As a member of an already new community, one can bring to justice the court of the corrupt tribe.

### Enforcement of court judgement

In existing jurisdictions, court process can have enforcements. It can be bank account blocking, confiscation of property, imprisonment. At the same time, the possibility to use enforcement in many countries and in many cases remains under question.

In our online system, enforcement works only according to score. Namely, the history and public information about the case is kept available to search engines and users until the judge has reviewed the case or the defendant has made restitution.

But if every person can be in the system only once, and the score information is true and easy to find, then such an enforcement begins to have a significant impact on the rest of a person's life.
People will inevitably consider if they should begin any relationship with that person, whether it is friendship, work, romance or anything else.

### Roles of court process

Court process involves many possible roles that can be customized by tribal specialists:

- plaintiffs
- plaintiffs' representatives
- defendants
- representatives of defendants
- witnesses
- representatives of witnesses
- judges
- jury
- spectators

We support any number of trial participants at each stage, including open joinder of plaintiffs to the trial (if this has been spelled out in the case settings).

### Synchronous and asynchronous court

We assume that court sessions can take place:

- In synchronous mode (where session takes place, for example, through Zoom or any other platform, and results of proceedings are uploaded to our system).
- In asynchronous mode, when a meeting is held in a form of text without simultaneous presence of participants.
Both options are acceptable to us and we implemented them on the platform.

### Stages of court process

Any court process implies a sequence of certain actions, which, in theory, work for one goal - justice. Our platform replicates standard stages of the court process. But with some modifications. The process looks as follows:

- Case preparation
- Selection of a judge
- Staking (payment of remuneration to a judge)
- Inviting a defendant
- Time to prepare response
- Case processing
- Handing down a judgement or scheduling a reconsideration

Here's more about some of these steps.

### Case preparation

A plaintiff or their representative chooses a jurisdiction in which they want to go to court, and then they file a lawsuit.

The plaintiff needs to provide information about a chain of events that led to certain damages. Of course, they have to attach overwhelming evidence and invite witnesses.

### Inviting Judges

The plaintiff specifies an anticipated fee for a judge. The case becomes available to judges, and then they have some time to review the case information and make their bid.

It should be noted that a court can also be anonymous. In that case, the plaintiff will not know the identity of the judge, and the judges will not know the identities of the plaintiff and defendant.

### Inviting Jury

If desired, a jury trial can be used as a part of a court process. How does it work? The system will send notifications with information about the case to residents of the jurisdiction who have indicated in their profiles that they are ready for such a role. The jury will be formed automatically.

### Inviting Defendant

Since YJ makes it possible to invite people who are not on the platform as defendants, the question arises - how to make a court process fair to them?

Let's focus on a few points.

- **Relevant notice**. Modern legal systems consider it fair to notify a defendant by physical mail. But in the last 20 years, the Internet has changed the world beyond recognition. Some people don't live in the same place and change addresses, some people don't check their mail because they don't need it, or because they get a lot of advertising in their mailboxes. It comes to a situation where it can be considered fair to notify a defendant via electronic channels - social networks and messengers (with a read message indicator). If a court goes against famous people, it is important to be able to contact them through their official working channels.
- **Time for preparation of defence**. Modern court systems state that a defendant needs at least 2 weeks to prepare their defense and properly respond to the charges. We believe this period is correct and introduce it into our court system.
- **Opportunity to defend yourself post-facto**. But what if the notification did not arrive or the defendant ignored the appeal? In that case, the judge can hand down a judgement based on the plaintiff’s data, but part of the judge's stake will be "locked" on the platform until the defendant joins in and does respond to the case.

By the way, a defendant can either ignore an invitation to court, or respond with consent or refusal.

#### Response Preparation

As a rule, a defendant is given some time to find a representative and form a defense position. The period can vary. It all depends on the size of the case.

#### Case consideration

Once a plaintiff and a defendant have entered data into the system, judges can review the case file. If any of the judges find fake evidence, they can take away the paid stake without handing down a judgement in favor of the plaintiff. Therefore, the plaintiff has an interest in providing real evidence. So does the defendant, though.

As mentioned, synchronous and asynchronous adjudication options are possible.

#### Handing down a judgement
YJ supports various types of judgements against any number of defendants, including ability to issue individual judgements against each defendant.

A judgement contains the following theses:

- What are the chances that the events actually happened.
- Whether the defendant is guilty or not guilty.
- Whether they must pay for any damages (and if so, how much)
- The amount of score the defendant is going to lose.

If the defendant who lost the case wants their score back to normal, they will have to fix the situation. And then the next judge will consider that possibility.

#### Appeal
If the defendant is not happy with the decision in the case, they have the opportunity to appeal, using the court of the plaintiff's jurisdiction to do so. If there are no higher courts in the plaintiff's jurisdiction, it’s possible appeal to the decentralized court of Humanity. They can also file a counterclaim in their jurisdiction.

#### Anonymizing the court
How do you make a court fairer? Different jurisdictions may have different opinions on this issue. It is likely that in some cases they will want to classify identities of judges and all the participants in the process, so that only the specified circumstance would be considered. Somewhere, for example, in the UK, judges consider identities of parties even before cases themselves.

We believe that both options are acceptable.

#### The Court and GDPR

From the point of view of GDPR, jurisdictions operating on our platform can be considered as media distributing publicly useful information, and such information (including information about behavior of third parties) cannot be removed from the media.

> It is not technically possible to remove any information from the platform, as it is protected from doing so through a distributed registry.
>

But what if evidence is fabricated and a person's good name is slandered? If false information about a person was mistakenly distributed, they should have the opportunity to rectify the situation. And the platform provides that opportunity. The court case can be reconsidered and an appeal can be made.

We also protect personal data. When uploading the evidence the user will have to mark it in a special way. The platform will hide this information from others.

## <a id="human-entity"></a>Human Entity

Human Entity is the sum of all the data about a person, jurisdiction or organization available on the platform.

### How people appear on the platform

Registration on the platform is open. You can register yourself and invite another person. It’s possible to invite a user as a friend by entering their email, or as a defendant by entering the data needed to make their actions public.

These two processes are different. If you invite a friend, you give them an option to manage their own profile. If it's a defendant, you need to make sure that the person is recognizable. Their name, photos and score will be open to everyone as public information.

However, their contact information will remain hidden.

### 1-to-1 Human to Entity

The system allows you to register many times, but its mechanics work so that you end up with 1 active entity. This is important for a fair score calculation.

For this purpose are used the bio verification tools, as well as the Entity Merge system.

### Entity Merge

If for some reason there are 2 entities belonging to the same person on the platform, they will start receiving merge requests from other users. These Merge Requests will be displayed on the main page of the entity.
It is up to the user to decide whether to accept a merge request or not. By accepting a merge request, the user will have the opportunity to respond to unreplied court cases, and therefore restore their reputation.

### Decentralized Verification

Some features of the platform (such as creating a jurisdiction) or submitting documents for a visa will require a decentralized identity verification.

**Pure Bio ID**

The platform provides Pure Bio ID by photo.

The platform’s AI without any human intervention will store an encoded cast of your face. The platform does not store a photo of your face, but only its processed casts. It’s impossible to reconstruct your face, but your ID on the platform will be linked to you personally and eliminate any possibility of you being verified again.

**Documents Verification**

If you want to get a visa to any country using the platform, you will need to activate the vault, upload the required documents (they will stay encrypted in your vault) and verify them.

For this case there is a decentralized document verification system that works on the same principles as Pure Bio ID.

**Trust Network Verification**

Another important verification tool is verification by a network of people you know in the real world.

**Social Networks Verification**

You can verify your identity through your Facebook or Instagram account.

### <a id="nicknames"></a>Nicknames

Often a person is unhappy with their first and last name and uses a nickname. This situation can also happen on our platform, so we support nicknames.

This does not contradict the 1-to-1 Human Entity principle, because one person still has one Entity, even if their first and last name are hidden and only a nickname is available.

### Entities Memories

In addition to living people, active organizations and jurisdictions, the platform can include memory accounts dedicated to people and tiles whose functioning has stopped.

There is also a procedure for converting an account from a living account to a memory account.

There is a decentralized system that lets a person become a cultural or property representative of a memory account. For example, if someone decides to sue Julius Caesar, one of his cultural representatives will speak for him. If it is a case involving property, it is possible to subpoena a property representative (but you have to prove that you are one).

In addition, the available rights for such accounts can change. For example, a person who is presumed dead cannot be a judge, prosecutor, legislator or take an active role.

## <a id="cross-chain-finance"></a>Tribal Economics. Cross-Chain Finance

One of the most interesting tasks for tribes on the platform could be creation of their own tokenomics. In our opinion, there are already enough financial blockchains in the world, and their current competition suggests that they will develop even more actively in the future. And we are happy to build their proposed solutions for transporting finances from wallet to wallet into the platform.

> So we don't do our own wallet solutions, but we do a lot of money management solutions.
>

Next, we will elaborate on what opportunities for financial and non-financial (for example, NFT) interaction are possible on the platform.

### Jurisdictional mirrors on blockchains

One of the reasons why we are making a tile system is that with its help it’s possible to describe and easily use any possible value management skope: from a jurisdiction's treasury or DAO to a contract between two people or an exchange of vegetables in a market.

The platform presents a system of vault-like smart contracts that are placed on relevant blockchains. We will start with Ethereum compatible blockchains and move on to other popular ones.

Such a smartcontract stores minimal logic, but remembers balance behind each tile.

When attempting to initiate an incoming or outgoing transaction, a pool contacts an oracle and the oracle checks if the transactions, amount of money and source match expectations. If the request is correct and can be satisfied, it passes on.

All complex interactions, such as voting, bidding, etc., are placed on YourJustice, where they are described, executed, and evolve.

### Existing Fungible and Non-Fungible Tokens

Contracts involve interaction around fungible and non-fungible tokens. For example, in the system it is quite possible to create a contract, according to which an ownership of a copyrighted object or a token that opens a car is transferred from one wallet to another in exchange for an amount of money or a fulfillment of certain conditions.

### С-Environment for businessmen and access to crypto for ordinary peiple

Anyone can create a company or organization in any jurisdiction (if they provided such an opportunity).

**The meaning of doing business in online jurisdiction for any businessman, in our opinion, is as follows:**

- Get transparent, fair (according to their value system), stable and protecting rules of doing business in the crypto environment.
- Use ready-made contracts from a jurisdiction, minimizing legal costs.
- Receive bonuses and support from a jurisdiction.
- Minimize taxes and fees by making maximum settlements without leaving the crypto sphere.
- Understand legal framework and history of people you interact with.

It's likely that within a community that shares common values with you, exchanging orders will become an easier and more profitable process. At least, it's worth a try.

> We expect that our platform will open up the world of cryptocurrency to ordinary people who are interested in buying and selling services, bypassing both unfair control and redundant and often intimidating interaction with code. Communities striving for independence сonsist of just such people.
>

### New industries

Moreover, we also count on the creation of new industries:

- **Decentralized law** (any law firm will now be able to create its own set of contracts and monetize them)
- **Decentralized mediation and court system** (people will need to sort out conflicts, lots of conflicts. That’s why mediators, judges, lawyers will be needed).
- **Decentralized visa system** (a person's history and social score become transparent after moving to blockchain. Visa centers will definitely like that)
- **Decentralized moderators** (if the Humanity community decides that some online content, such as violence, is inappropriate, then decentralized moderators will help deal with that type of content)

### Profits for the use of jurisdictional services

Our smart contract system in the form of tiles would look as follows: jurisdictions buy computing power from a network, use that power to create legal processes, tile templates and public services, and then sell those services to people.

Jurisdictions are free to choose their own form of monetization. There may be situations where people have to pay for use in specific cases, or there also may be subscriptions to jurisdiction's services, as well as any other form a jurisdiction wants to embody.

Moreover, price and quality will always be competitive because:

1. There is competition between jurisdictions and people will move to one with better service.
2. The code is open, which means that if the price of YJ is unreasonably high and the rules are too complicated, forks of the network will appear.

**To summarize: jurisdictions will profit from the execution of smart contracts, and residents and customers of those jurisdictions will benefit from quality and ever-improving contracts at a market-based price.**

### Jurisdictions and Marketplaces

Marketplaces can exist in the system. We are expecting to see decentralized marketplaces for goods, services, rental properties, and many others.

There are lots of convenient ways to organize such marketplaces in the tiles and our web engine. The infrastructure of forks will allow to conveniently balance their prices.

### Crowdfunding and charity

Free jurisdictions and contractual relationships open up many opportunities for shared ownership of property.

Any resident can launch a fundraiser to solve some problem through getting financial help.

We are expecting all transactions of this nature to be done through the tile system. Everyone will be able to make sure that the money goes for the declared purposes.

### The DAPPS ecosystem

#### What else?

There are actually more options for using the tiles than we can even imagine! We are counting on development teams to join us in creating new areas of their application.

For example, interesting areas like interaction with the Internet of things (doors that you can open only if you have certain rights), with data collection (writing video and audio of your life to your own storage to submit this data to courts, decentralized insurance, and so on).

<WhitepaperNav>
  <Link type="inner" href="/whitepaper/chapter-one"><span>Prev. chapter</span></Link>
  <Link type="inner" href="/whitepaper"><span>Table of content</span></Link>
</WhitepaperNav>
