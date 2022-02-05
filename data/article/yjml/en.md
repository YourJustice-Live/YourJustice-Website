*28.01.2022*

You can describe anything using this standard of YJML

For example:

- country with a lot of substructures
- international contracts and agreements
- organisation that’s managing other structures
- structure, that’s managed by other structure
- work of big corporation
- science and innovative system
- .. you name it

**Main differences from previous version are:**

- roles
- rules
- events

## <a id="event"></a>Event (reporting):

<Code>
entity:

  title:
  description:

  event_reported:

    creator: USER_ID
    origins:
      tile: TILE_ID
      rule_connected: RULE_NAME

    report_status: rumor | firsthand
    content:
      text: # with mask User did Smth at datetime to Someone or something
      media:
      link:

    binary: bool # is your event binary (like the fact of pregnancy) or it has some important quantitative characteristics?
    event_scales: [{key:value}]

    witnesses: [USER_ID] #other users who can confirm

    evidences:
      evidence_datetime:
      evidence_creator:
      evidence_status: rumor|firsthand
      evidence_text: !string
      evidence_media: [file]
      evidence_link: !href
</Code>

## <a id="tile"></a>Tile structure:

<Code>
entity:

  title: string
  description: string

  tile:

    functional: # what will change in reality if tile will be palyed

    terms:

	  actions:

    constructive:

      subtiles: # sub-tiles are listed and relations are specified

      roles:

        target_roles:

        system_roles:

        design_time_roles:

      custom_types:

      rating_scales:

      conventions:

        purpose_of_cooperation:

        values:

        rules:

          target_rules:

          update_rules:

</Code>

### <a id="components"></a>Components

**functional**

<Code>
		purpose_of_tile:
      type: purpose_of_tile
      props:
        title: string
        trackable: [action] # use wrapped _createEvent or _giveEvidence action to specify what event you want to see here
        untrackable: string # and add some free text here if needed

    to_supertile:  
      type: to_supertile # what playing this tile will give to supertile
      props:
        title: string
        supertile: TILE_ID
        benefit: string

      to_players: # what playing this tile will give to players
        type: to_players
          title: string
          player: ROLE_NAME
          benefit: string
</Code>

**terms**

<Code>
terms:
# full
type: term
props:
  title: String!
  description: String!
  tags: [string]

## natural with keywords:
something __IS DEFINED__ as something something
</Code>

**actions**

<Code>
\# Tile creation

_createTile:
  args:
    template_tile_id: TILE_ID
  return:
    tile: TILE

\# **Tile updating actions:**

  \# Create new branch

  _createBranch:
    args:
      runtime_tile: TILE_ID
    return:
      branch_id: TILE_ID
      main_id: TILE_ID

  # Edit branch

  _editBranch:
    args:
      branch_id: TILE_ID
      branch_content: TILE_CONTENT
      branch_diff: ##diff that user wants to make
    return:
      updated_branch: TILE

  # Commit Branch

  _commitBranch:
    args:
      branch_id: TILE_ID
    return:
      commited_branch_id: TILE_ID

  # Merge

  _mergeBranch:
    args:
      branch_id: TILE_ID
      main_id: TILE_ID
    return:
      new_main: TILE_ID

  # Approve standBy version

  _approveSBVersion:
    args:
      main_id: TILE_ID
      procedure:
        procedure_ID: TILE_ID #tile which describes valid voting procedure
        procedure_outcome: bool
    return:
      stand_by_tile: TILE

  # Approve runtime version

  _approveRTVersion:
    args:
      stand_by_tile: TILE_ID
      procedure:
        procedure_ID: TILE_ID #tile which describes valid voting procedure
        procedure_outcome: bool
    return:
      runtime_tile_new: TILE  

# **Roles updating actions:**

# Invite to role (actually shortcut for)
    _checkUser:
      args:
        name: string
        surname:
        date_of_birth:
        city:
        mail:
        tags: [string]
      return:
        user_status: bool
        user_id: USER_ID # if their privacy settings allow

    _inviteInternalToRole:
      args:
        role: ROLE_NAME
        tile_id: TILE_ID
        actor: USER_ID
      return:
        invitation_sent: bool

    _inviteExternalToRole:
      args:
        role: ROLE_NAME
        tile_id: TILE_ID
        actor: string
      return:
        invitation_link: INVITATION_LINK # with rights to access forms

# So invite to role      

  _inviteToRole:
    args:
      role: ROLE_NAME
      tile_id: TILE_ID
      actor:
        internal: USER_ID
        external: string #name
    return:
      invitation_sent: bool
      invitation_link: INVITATION_LINK #if role requires filling forms invitation redirects?

  # Accept role

  _acceptRole:
    args:
      role: ROLE_NAME
      tile_id: TILE_ID
    return:
      role: ROLE # whole role object with information about who plays this role now

  # Decline role
  _declineRole:
    args:
      role: ROLE_NAME
      tile_id: TILE_ID
    return:
      role: ROLE # with free status


  # Apply to role

  _applyToRole:
    args:
      role: ROLE_NAME
      tile_id: TILE_ID
      params: [{key:value}] # specified in tile (it is shortcut)
    return:
      application_sent: bool

  # Remove from role

  _removeFromRole:
    args:
      role: ROLE_NAME
      tile_id: TILE_ID
      actor: USER_ID
    return:
      role_status: free


  # *#Accept application*

  _acceptApplication:
    args:
      role: ROLE_ID
      actor: USER_ID
      tile: TILE_ID
    return:
      role: ROLE

  # *#Update application

  _updateApplication:
    args:
      role: ROLE_ID
      actor: USER_ID
      tile: TILE_ID
    return:
      role: ROLE

  # *#Decline application*

  _declineApplication:
    args:
      role: ROLE_ID
      actor: USER_ID
      tile: TILE_ID
    return:
      role_status: free
      notification_sent: bool #and your standard letter specifien in tile maybe...

# **Events:**

  # Create events

  _createEvent:
    args:
      title: !string
      description: !string
      tile: TILE_ID
      rule: RULE_NAME
      witnesses: [USER_ID]
      evidence_type: rumor|firsthand|media
      evidence_text: !string
      evidence_media: [file]
      evidence_link: !href
    return:
      new_event: EVENT

  # Edit event

  _editEvent:
    args:
      event_id: EVENT_ID
      modification:
        description: !string
        media: [file]
        witnesses: [USER_ID]
    return:
      event: EVENT

  # Give evidence

  _giveEvidence:
    args:
      event_id: EVENT_ID
      witness: bool
      evidence_type: rumor|firsthand|media
      evidence_side: pro|contra
      evidence:
    return:
      event: EVENT

  # Evaluate event

  _evaluateEvent:
    args:
      event_id: EVENT_ID
      tile_id: TILE_ID
      rule: RULE_NAME
      actor: USER_ID #Who will get evaluation he-he-he
      scale:
        scale_id: SCALE_ID
        scale_title: TITLE
        amount: amount
    return:
      rating_event: RATING_EVENT

# **Profile:**

  # Create profile

  _createProfile:
    args:
      user_id: USER_ID
      tile_id: TILE_ID
      profile_form_id: PROFILE_FORM_ID
      params: [{key:value}]
    return:
      user_profile: PROFILE

  # Update profile

  _updateProfile:
    args:
    user_id: USER_ID
      tile_id: TILE_ID
      profile_form_id: PROFILE_FORM_ID
      params: [{key:value}]
    return:
      user_profile: PROFILE

# **Processes

  _initiatePlayOut:
    args:
      tile_id: TILE_ID
      params: [{key:value}]
      roles: [ROLE,USER_ID] #if there is no automatic rule for such situations
    return:
      invitation_sent: [bool]

  # Vote

  _vote:
    args:
      tile_id: TILE_ID
      agenda: STRING
    return:
      vote: bool

  # Count votes

  _countVotes:
    args:
      tile_id: TILE_ID
    return:
      result: FORM_ID

  # Announce decision

  _announceDecision:
    args:
      tile_id: TILE_ID
      result: FORM_ID
    return:
      announce: POST
</Code>

**constructive**

<Code>

subtiles: # sub-tiles are listed and relations are specified

	subtile_name:

      entity_id: ENTITY_ID

        type: role_downwards # for auto-appointment
        props:
          title: string
          this_tile_role:
            by_name: ROLE_NAME # role in this tile
            by_right: [right] # rights in this tile with logic operators

          sub_tile_role:
              by_name: ROLE_NAME # role in sub-tile
              by_right: [right] # rights in sub-tile with logic operators



        type: role_upwards # for rule-based efforts which must contain checking for conflicts. Experimental ans raw!
        props:
          title: string
          rule: RULE_NAME # rule in this tile

          sub_tile_role:
              by_name: role_name
              by_right: [right]

          this_tile_role:
            by_name: role_name
            by_right: [right]


        type: convention_theme
        props:
          title: string
          convention_type: value|rule|variable
          convention_name: string
          convention_priority: super|sub

        type: term_theme
        props:
          title: string
          term_tag: string
          priority: super|sub
          explanation: string

roles:

  target_roles:
		type: role
	  props:
	    title: string
	    description: string
	    tags: [string]

	    active_stage_bdi:
	      beliefs: [VALUE_NAME;we|fit], [EVENT;BOOL] # value specified in tile
	      desire: [action] # one, max two well-specified event-creation actions, what ROLE want to see occured
	      intention: string # main strategy to do specified above  

	    life_cycle_stages:
	      type: life_cycle_stage
	      title: string
	        - application
	        # or
	        - invite # to fill form or...
	          rights: [action]
	        - active
	          rights: [action]
	        - ex
	          rights: [action]

	    profile_form:
	      params: [{key:value}] # what tile wants to store in user's profile about user linked to this role

	    role_requirements:
	      modality: must|must_not # you can see some kind of parralelism with rule declaration, but "may" modality is not needed
	      other_roles:
	        tile: TILE_ID # tile in which other role can or can't be
	        role_name: ROLE_NAME
	          life_cycle_stage: LIFE_CYCLE_STAGE_NAME
	        role_tags: [string]
	        # leave all previous blank and "must have at least one role with this tag" in case of "must" modality
	        # and "must have no roles with this tag" in case of "must_not" modality
	      other:
	        params: [{key:value}]

	    application_form: # if any
	      params: [{key:value}]

	  # ROLE_NAME belives something and wants something, so intends to do something.
	  # ROLE'S LIFE CYCLE is as follows STAGES. Each stage posseses its rights for the ROLE.
	  # The TILE will collect and store the PROFILE FORM info in connection to this role.
	  # To play this ROLE, USER must or must not something.
	  # Application form is as follows.


  system_roles:
		# usually _guest, _admin and so on

  design_time_roles:
		# list roles which are participating in document creation and versioning process, such as "voter" "developer" and so on,
		# declaration form is the same as for other roles

custom_types:
	type: custom_type
	props:
	  title: string
	  params: [{key:value}]

rating_scales:
	type: rating_scale
	props:
		title: STRING
	  scale_id: SCALE_ID
	  quality: string # what general quality is evaluated by this scale (ontology will be presented later on)
	  evaluator: ROLE
	  evaluated: ROLE
	  scale_min: NUMBER # -100 <= min
	  scale_max: NUMBER # min < max <=100 # numbers may differ
		step: NUMBER # 0.001 < step <= 1 & (max - min) / step == integer
	  tags: [string]

conventions:

  purpose_of_cooperation:
		type: purpose_of_cooperation
	  props:
	    title: string # maybe custom name for it  
	    statement:
	      we: string
	      reason: string # why we decided to cooperate
	      purpose: string # what we are going to do by all this

	# natural with keywords   
	We %somebody% for some %reasons% decided to cooperate in this for achieving %something%.

  values:
		#full
	  type: value
	  props:
	    title:
	      en: string
	      ru: string
	    flex: immutable|fixed until DATE.TIME|flexible
	    statement:
	      en: string
	      ru: string
	    positions:
	      we: [string] *
	      fit: [string] *
	      unfit: [string]
	      enemy: [string]
	    tags: [string] # for grouping purposes and other
	  #natural with keywords
	  __WE VALUE__ something. __WE CLAIM|THINK|BELIEVE__ that something and __WILL|WILL NOT TOLERATE OTHER OPINIONS SUCH AS__ something.

  rules:

    target_rules:
		  # basic rule about what to do (deontic modal logic inspired)
			type: rule
			props:
			# type rule has two main parts, important event specification (which is reusable in other rules)
			# and rule about the event itself
			# do not confuse "important event specification" and "event_reported" entity when you report parts of occuring reality in the system
			  type: event
			  props: # or you can *inherit* all props from other event to just create completely different rule about it
			    title: !string
			    description: !string # short description
			    content:
			      text: !string # with masks, for example "ROLE publishes Х", или "ROLE beats ROLE" + we can add additional name of the role for in-rule use using "=": ex:"ANY_ROLE@ANY_TILE = AGRESSOR"
			      media:
			      link: !href
			    confirmation_method: # fill only one that fits
			      actor_report: bool # report of somebody who actually do the action of the event
			      witnesses: # reports of witnesses
			        number: # you can specify what amount of withesses
			        requirements: [{key:value}] # and what requirements for them
			      court: [TILE_ID] # list possible court tiles whose decisions you will trust
			      specific_role_report: [ROLE] # you can refer by in-rule name of role
			    binary: bool # is your event binary (like the fact of pregnancy) or it has some important quantitative characteristics?
			    event_scales: [{key:value}]

			# rule connected to the event above
			event_confirmed: event_title # We noticed event occured...
			event_modality: must|may| !(may) # !may = is not allowed
			when:
			  - always
			  - DATE.TIME, repeating time or period
			  - after another event or action
			presence_actions: # actions in case of event presence
			  enforcer: system | court_decision | ROLE
			    on_whom: ROLE
			    orders: [string] # with mask; send orders to ROlE above
			    rating:
			      scale: scale_id | scale_name  
			      amount: number|event_scale_name # use number (min-max) or event_scale_name from event declaration and simple math
			absence_actions: # actions in case of event presence, use with must-rules
			  enforcer: system | court_decision | ROLE
			    on_whom: ROLE
			    orders: [string] # with mask; send orders to ROlE above
			    rating:
			      scale: scale_id | scale_name  
			      amount: number|event_scale_name
			# use multiple blocks of presence and absence actions
			exceptions: [{key:value}] # use optional fields to specify the exceptions
			flex: immutable|fixed until DATE.TIME|flexible
			value: VALUE_NAME # must be specified in this tile or in supertile-chain
			tags: [string] # for grouping purposes and other

    update_rules:
			# same as target  

</Code>
