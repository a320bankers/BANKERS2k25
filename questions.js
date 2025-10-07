const questions = [
    {
        question: "Where is the flap/slat position displayed",
        answers: ["On both PFDs", "On the E/WD", "On the flap/slat indicator", "On the SD"],
        correct: 2
    },
    {
        question: "The cross feed valve (X FEED) is:",
        answers: ["Open for takeoff", "Opened automatically when the MODE SEL pushbutton is set to AUTO, and the fuel imbalance reaches 1500kg", "Controlled by a single motor", "Normally closed"],
        correct: 4
    },
    {
        question: "Below what altitude does the vacuum generator produce the necessary pressure differential to force waste from the toilet bowls into the waste storage tank?",
        answers: ["20,000 ft", "16.000 ft", "18,000 ft", "14,000 ft"],
        correct: 2
    },
    {
        question: "How is the engine and IDG oil cooled?",
        answers: ["Via radiator located in the engine pylon, that are cooled by a mixture of ram air or fan air depending on the conditions", "Via FUEL/OIL heat exchangers. All of the fuel supplied to the engine is burnt in the combustion chamber, there is no need to return any excess fuel to the tanks", "Via FUEL/OIL heater exchangers. Excess fuel that has been used for this purpose and not used by the engine, is returned to the outer fuel tanks", "Via radiator that are cooled using only air from the fan"],
        correct: 3
    },
    {
        question: "What is output power of each of the AC Generators?",
        answers: ["IDG 90KVA, APU 90KVA, emergency generator 23KVA, Static Inverter 5KVA", "IDG 115KVA, APU 115KVA, emergency generator 15KVA, Static Inverter 1KVA", "IDG 90KVA, APU 90KVA, emergency generator 5KVA, Static Inverter 1KVA", "IDG 100KVA, APU 100KVA, emergency generator 5KVA, Static Inverter 1KVA"],
        correct: 3
    },
    {
        question: "How is an armed slide indicated on the DOOR/OXY page?",
        answers: ["The word SLIDE appears in GREEN next to the associated door", "No label is seen next to the associated door (If the door was disarmed SLIDE DISARMED would be displayed in AMBER", "The word SLIDE appears in WHITE next to associated door", "The message SLIDES ARMED appears in WHITE under the DOOR/OXY title"],
        correct: 3
    },
    {
        question: "After engine start, which MCDU page should be used to modify ZFW and ZFWCG?",
        answers: ["Progress Page (PAGE)", "INIT B", "Fuel Prediction Page (FUEL PRED)", "T/O Performance page (PERF)"],
        correct: 3
    },
    {
        question: "Which ACP transmission key will illuminate if the cabin attendants are calling the cockpit?",
        answers: ["VHF3", "PA", "CAB", "ALERT"],
        correct: 3
    },
    {
        question: "What is the meaning of an AMBER light in a flight deck pushbutton?",
        answers: ["Normal system operation", "A failure requiring immediate action", "A failure that the flihgt crew should be aware of, but does not call for immediate action", "An abnormal pushbutton position"],
        correct: 3
    },
    {
        question: "Cost Index = 0 (zero) corresponds to:",
        answers: ["LRC (Long Range Cruise)", "Minimum time", "Best ratio between the flight time cost and the fuel cost", "Minimum fuel consumption (max range)"],
        correct: 4
    },
    {
        question: "Which of the following AC busses can be powered by the emergency generator?",
        answers: ["BAT BUS", "AC ESS and AC ESS SHED busses", "AC BUS 2", "AC BUS 1"],
        correct: 2
    },
    {
        question: "What impact does a single hydraulic failure have on the slats and flaps?",
        answers: ["The corresponding surfaces will lock", "The slats and flaps operate normally", "The corresponding surfaces operate at half speed", "The corresponding surfaces will operate at 2/3 of normal speed"],
        correct: 3
    },
    {
        question: "How can the secondary flight plan be activated in flight?",
        answers: ["When HDG or TRK lateral guidance modes are engaged, select the ACTIVATE SECONDARY prompt on the SEC INDEX page on the MCDU. This prompt will not be available in NAV unless the active leg in the primary and secondary are the same", "Select the ACTIVATE SECONDARY prompt on the SEC INDEX page of the MCDU. This feature is available at all times.", "Use the ENABLE ALTN command in the lateral revision page for any waypoint on the flight plan", "The secondary flight plan can only be activated while the NAV mode is engaged. When this condition is met, the ACTIVATE SECONDARY prompt will be available on the SEC INDEX page of the MCDU"],
        correct: 1
    },
    {
        question: "What happens to the wing and engine anti-ice valves when electrical power fails?",
        answers: ["Wing anti-ice valves close, engine anti-ice valves close", "Wing anti-ice valves open, engine anti-ice valves close", "Wing anti-ice valves close, engine anti-ice valves open", "Wing anti-ice valves open, engine anti-ice valves open"],
        correct: 3
    },
    {
        question: "What can the flight crew do if the Captain loses audio in their headset (audio channel failure)?",
        answers: ["The AUDIO SWITCHING selector should be set to CAPT/3, this connects the Captain's headset to ACP3 on the overhead panel", "The Captain should plug their headset into the third occupants headset jack, and then use ACP 3 on the overhead panel", "Change the batteries in the headset", "Audio cannot be recovered on the Captain's side, the FO will make all radio calls for the remainder of the flight"],
        correct: 1
    },
    {
        question: "What is the function of the landing gear SAFETY VALVE?",
        answers: ["The safety valves prevents the landing gear from being hydraulically supplied on the ground. The valve opens pressurising the landing gear as soon as the aircraft leaves the ground.", "When the aircraft is flying faster than 260kts the safety valve automatically cuts off hydraulic supply to the landing gear system", "The safety valve prevents the landing gear from extending too quickly causing damage to the down locks", "When the aircraft is flying faster than 250 kts, the safety valve automatically cuts off hydraulic cupply to the landing gear system"],
        correct: 2
    },
    {
        question: "Regarding ALPHA FLOOR, which of the following statements is true?",
        answers: ["It is available at all times in flight", "It is only available if the aircraft is in the clean configuration", "It will engage even if the A/THR is switched off", "After activation, A.FLOOR will disengage as soon as the thrust levers are moved by the flight crew"],
        correct: 3
    },
    {
        question: "Can wing anti-ice be used when one engine is inoperative?",
        answers: ["Yes, APU bleed air van be used for wing anti-ice", "Yes, provided the x-bleed is selected open, one pack is selected off and the fire push button has not been pushed", "No, it is not possible for one engine bleed to supply air to both wings for anti-icing", "Yes, the crossbleed will automatically open after the wing anti-ice has been selected ON"],
        correct: 2
    },
    {
        question: "What is the function of the hydraulic priority valves?",
        answers: ["They prioritise hydraulic power to the heavy load users", "If the heavy load users cause a large drop in system pressure, the priority valve will close cutting off supply to the loads", "They will close when the flight crew push the ENG 1(2) FIRE pushbutton", "They prioritise the engine driven pumps over the PTU"],
        correct: 2
    },
    {
        question: "During an automatic start sequence on the ground, when does the ignition start and stop?",
        answers: ["Ignition starts at 22% N2, and stops when N2 is more than 56%", "Ignition starts as soon as the engine MASTER is set ON, and stops when N2 is more than 50%", "Ignition starts at an N2 of 16%, and stops when N2 is more than 50%", "Ignition starts when the MODE selector is set to IGN/START, and stop when N2 is greater than 43%"],
        correct: 3
    },
    {
        question: "What is the take-off and go around EGT limit for the CFM engine?",
        answers: ["915°C", "625°C", "725°C", "950°C"],
        correct: 4
    },
    {
        question: "Is this alert HYD G ENG 1 PUMP LO PR a primary, secondary or independant failure? (PTU is operative, and hydraulic pressures are normal)",
        answers: ["Both primary and secondary", "Independant", "Secondary", "Primary"],
        correct: 2
    },
    {
        question: "When all 6 fuel pumps are selected ON (MODE SEL auto), which fuel tank(s) will preferentially feed each engine? (assume that all tanks contain useable fuel)",
        answers: ["ENG 1 will receieve fuel from the left inner tank, and ENG 2 will receive fuel from the right inner tank. When each inner tank is empty, fuel will feed to each engine from the centre tank.", "ENG 1 will receive fuel from the left outer tank, and ENG 2 will receive fuel from the right outer tank. When each other tank reaches approximately 750kg, the transfer valves open allowing fuel to be fed from the inner tanks", "Shortly after departure both engine will receive fuel preferentially from the centre tank provided the slats are retracted, and approximately 500kg of fuel has been used in each inner tank", "If the landing gear is retracted, both engines receive fuel continuously from the centre tank until it runs dry. CTR TK FEED (green) memo will be displayed on the E/WD."],
        correct: 3
    },
    {
        question: "During final approach, when is LAND annunciated on the FMA?",
        answers: ["It engages at MDA, and can be disengaged by setting TOGA thrust", "It engages ,400ft RA until approximately 40RA when it is replaced by FLARE. It can be disengaged by setting TOGA thrust, or by disconnecting both AP and FD", "It engages <400ft RA until approximately 40 RA when it is replaced by FLARE. It can be disengaged by pushing the APPR pushbutton on FCU to cancel the approach", "It engages at 1000ft RA with the aircraft in the Landing Configuration (Flap 3 or Flap FULL)"],
        correct: 2
    },
    {
        question: "If power to the cockpit door fails:",
        answers: ["Power from the emergency bus is automatically routed to the door locks to keep them in place", "The door does not unlock automatically and remains closed", "The door unlocks automatically, but remains closed", "The evacuation panel in the door is released"],
        correct: 3
    },
    {
        question: "If a C/B trips what action should the flight crew take?",
        answers: ["On the ground, any C/B can be re-engaged without consulting maintenance so long as it doesn't have a red colour. In flight, a C/B can be re-engaged no more than two times", "The C/B can be re-engaged as many times as necessary if required for the safe conduct of the flight", "Consult the C/B tripped procedure in the QRH for guidance. On the ground a C/B can be reengaged on the direction of maintenance. In flight a C/B should not be reengaged under any circumstances", "Consult the C/B tripped procedure in the QRH for guidance. On the ground the first step is to contact maintenance to identify the cause. In flight the C/B should not be reengaged unless the captain deems it necessary for the safe continuation of the flight (only one reengagement is permitted"],
        correct: 4
    },
    {
        question: "How do you adjust the brightness of the FCU displays?",
        answers: ["On the MCDU", "Using the INTEG LT rotary switch", "Using the FLOOD LT rotary switch", "Using the rotary knobs located beneath the FCU"],
        correct: 4
    },
    {
        question: "Can you reconnect an IDG in flight?",
        answers: ["Yes, but only after contacting maintenance control", "Yes, push and hold IDG pb until the GEN fault light is no longer illuminated", "No, it is not possible", "Yes, provided the engine is running or windmilling"],
        correct: 3
    },
    {
        question: "What is the started limitation for the APU?",
        answers: ["A 60 min cooling period is required following three consecutive start attempts", "A 3 min cooling period is required following each start attempt", "A 45 min cooling period is required following 4 consecutive start attempts", "A 30 min cooling period is required following three consecutive start attempts"],
        correct: 1
    },
    {
        question: "On the RMP, the ON/OFF switch controls:",
        answers: ["Only the COM function of the RMP", "Only the STBY NAV function of the RMP", "The power supply to the RMP", "The power supply to both the RMP and ACP"],
        correct: 3
    },
    {
        question: "Which busses can be powered from the emergency generator?",
        answers: ["AC ESS and DC ESS via ESS TR only", "DC ESS, and AC ESS via the AC ESS FEED only", "BAT BUS, AC ESS, AC ESS SHED, DC ESS, DC ESS SHED", "DC ESS, DC ESS SHED, AC ESS and AC ESS SHED"],
        correct: 4
    },
    {
        question: "When do the transfer valves close automatically?",
        answers: ["At the next refuelling operation", "Following a fuel low level warning", "When inner tanks reach approx 705kg", "When outer tanks are emptied"],
        correct: 1
    },
    {
        question: "What is the max continuous thrust EGT limit for the CFM engine?",
        answers: ["725°C", "950°C", "915°C", "625°C"],
        correct: 3
    },
    {
        question: "How can you check that engine anti-ice has been selected on?",
        answers: ["The ON (WHITE) lights on the ENG anti-ice push buttons are the only indications", "ENG A.ICE will be displaued on the status page", "ON (BLUE) light on one or more ENG anti-ice push buttons, ENG A.ICE memo displayed in GREEN on the E/WD", "ON (WHITE) light on one or more ENG anti-ice push buttons, ENG A.ICE memo displayed in AMBER on the E/WD"],
        correct: 3
    },
    {
        question: "Regarding an autoland approach, with both autopilots engaged, which FMGC is master?",
        answers: ["Neither", "Both", "FMGC 2", "FMGC 1"],
        correct: 4
    },
    {
        question: "Which of the following communication methods are used for datalink messages?",
        answers: ["VHF, HF or SATCOM (when fitted and available)", "VHF only", "VHF or HF only", "SATCOM only"],
        correct: 1
    },
    {
        question: "In which configuration will green dot be displayed on the PFD?",
        answers: ["CONF 1+F", "All the answers are correct", "Clean configuration", "CONF 1"],
        correct: 3
    },
    {
        question: "What happens if the EXPED button is pushed when the FCU selected altitude is above the current altitude?",
        answers: ["THR CLB (if A/THR active) and EXP CLB engage. The speed becomes managed with a target of green dot, altitude constraints are disregarded", "THR CLB (if A/THR active and EXP CLB engage. The speed becomes managed with a target of best rate of climb, altitude constraints are obeyed", "THR CLB (if A/THR active and OP CLB engage. The speed becomes managed with a target of green dot, altitude constraints are disregarded", "THR CLB (if A/THR active and CLB engage. The speed becomes managed with a target of green fot, altitude constraints are obeyed"],
        correct: 1
    },
    {
        question: "What do two dashes across the last two digits of fuel quantity indication mean?",
        answers: ["The fuel quantity indicated is inaccurate for one or more tanks. The FUEL SD page can be used to determine which tanks are affected", "The fuel quanitity indicated for every tank is completely unreliable", "The fuel quantity indicated for one or more tanks is completely unreliable. The FUEL SD page can be used to determine which tanks are affected.", "The fuel quantity indicated for every tank is inaccurate"],
        correct: 1
    },
    {
        question: "IF a SEC fails, what happens to the spoiler(s) it controls?",
        answers: ["The effected spoiler is automatically retracted, and the symmetrical one on the other wing is inhibited", "The effected spoiler is automatically retracted, and this may lead to asymmertrical spoiler deployment", "The effected spoiler retains the deflection it has at the time of the loss, and the symmetrical one on the other wing is inhibited", "The effected spoiler retains the deflection it has at the time of the loss, this may lead to asymmetrical deployment of the spoilers"],
        correct: 1
    },
    {
        question: "All communications radios can be controlled",
        answers: ["By the F/O", "From RMP 1 and RMP 2 only", "From anyone of the three radio management panels (RMPs)", "From the audio control panels (ACPs)"],
        correct: 3
    },
    {
        question: "On the ECAM E/WD, when does the LDG INHIBIT (magenta) memo appear?",
        answers: ["Below 2000ft radio altitude", "With selection of FLAP 2 on the approach", "With selection of GEAR DOWN", "Below 800ft radio altitude"],
        correct: 4
    },

    {
        question: "What will trigger the CAB PR LDG ELEV FAULT (amber) alert?",
        answers: ["The failure of CPC 1+2", "The active CPC is no longer receiving the landing field elevation automatically from the FMGS. The flight crew must set the MODE SEL push button to MAN on the CABIN PRESS panel", "The active CPC is no longer receiving the landing field elevation automatically from the FMGS. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob on the CABIN PRESS panel", "The outflow valve has failed to fully open after landing"],
        correct: 3
    },
    {
        question: "What is the significance of the green coloured circuit breakers?",
        answers: ["Green collared circuit breakers are AC powered", "Green collared circuit breakers are pulled when flying on battery power only", "Green collared circuit breakers are not to be reset", "Green collared circuit breakers are monitored by the ECAM"],
        correct: 4
    },
    {
        question: "Which valves can the flight crew control via the ENG1 (ENG2) MASTER switches?",
        answers: ["LP and HP fuel shutoff valves", "LP fuel shutoff valve only", "Hydraulic fire shutoff, LP and HP fuel shut-off valves", "HP fuel shutoff valve only"],
        correct: 1
    },
    {
        question: "During a single engine taxi, engine 1 is running and engine 2 is off. What happens when the ENG MODE selector is moved from NORM to IGN/START?",
        answers: ["The ENG SD page appears, the engine 2 FADEC is powered (amber crosses disappear for engine parameters), and the pack valves close. Continuous ignition for engine 1 has been manually selected", "Continuous ignition, using both igniters (A+B), will be selected for both engines", "The engine 2 FADEC is powered ready for engine start only.", "There will be no impact to engine 2 because its FADEC is already powered by the aircraft electrical system, and the SD page will already be displayed. Continuous ignition, using one igniter (A or B), will be selected for engine 1."],
        correct: 1
    },
    {
        question: "Select the correct starter limitation for the CFM engine:",
        answers: ["A 15 minute cooling period is required following 4 failed start cycles", "A 60 minute cooling period is required following 3 consecutive start attempts", "A 10 second pause is required between each start cycle", "A 20 minute cooling period is required following 3 failed start cycles"],
        correct: 1
    },
    {
        question: "Select the correct statement about the AGENT pushbuttons on the FIRE panel:",
        answers: ["When the associated FIRE PB (ENG or APU) is released SQUIB illuminates in amber on the corresponding agent pushbutton(s)", "After an ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s), this helps identify the agents to be activated", "When the associated FIRE PB (ENG or APU) is released SQUIB illuminates in white on the corresponding agent pushbutton(s)", "After a ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s). After the bottle has been discharged the SQUIB light is replaced by an amber DISCH light"],
        correct: 3
    },
    {
        question: "Which hydraulic system is used for landing gear retraction and extension?",
        answers: ["Green or yellow", "Blue", "Green", "Yellow"],
        correct: 3
    },
    {
        question: "How can armed FMA modes be identified on the PFD?",
        answers: ["Armed FMA modes are displayed in magenta (selected) or blue (managed)", "Armed FMA modes are displayed in blue (selected) or magenta (managed)", "Armed FMA modes are displayed in blue (selected) or green (managed)", "Armed FMA modes are displayed in blue (selected) or white (managed)"],
        correct: 2
    },
    {
        question: "After a takeoff in CONFIG 1 +F, what would happen if FLAP 0 is not selected as the aircraft accelerates?",
        answers: ["At 230 kt the slats and flaps will automatically retract changing the config from 1+F to 0. This prevents slat/flap overspeed", "At 210 kt the flaps will automatically retract changing the config from 1+F to 1. This raises the VFE from 215 to 230 kt", "At 200 kt the flaps will automatically retract changing the config from 1+F to 1. This raises the VFE from 215 to 230 kt", "The flaps will be overstressed as the VFE of 215kt is exceeded"],
        correct: 2
    },
        {
        question: "What do amber boxes on a MCDU page indicate?",
        answers: ["The waypoint indicated will be overflown", "A mandatory data entry", "An optional data entry", "A compulsory reporting point"],
        correct: 2
    },
    {
        question: "When does the PTU operate?",
        answers: ["When there is more than a 750 PSI pressure difference between the green and yellow systems. The PTU is inhibited during the first engine start, and when the cargo doors are operated.",
                  "When there is more than a 500 PSI pressure difference between the green and yellow systems. The PTU is inhibited during the first engine start, and when the cargo doors are operated.",
                  "At any time that there is more than a 500 PSI pressure difference between the green and yellow systems.",
                  "When there is more than a 500 PSI pressure difference between the green and yellow systems. The PTU is inhibited when both engines master switches are set to off."],
        correct: 2
    },
    {
        question: "The Air Conditioning System Controller 1 (ACSC 1):",
        answers: ["Regulates cockpit, cabin and cargo compartment zone temperatures", "Regulates both the cockpit, and the two cabin zones temperature", "Is the primary controller", "Regulates the cockpit temperature"],
        correct: 4
    },
    {
        question: "Select the correct statement about the FAULT lights on the IR push buttons on the ADIRS panel:",
        answers: ["A flashing FAULT light indicates that attitude and heading information may be recovered in ATT mode.",
                  "A steady FAULT light indicates that the NAV mode of the associated IR has been lost. Refer to the ECAM procedure to check If it is possible to recover attitude and heading in ATT mode.",
                  "A flashing FAULT light indicates that the associated IR has been lost.",
                  "A steady FAULT light indicates that attitude and heading information may be recovered in ATT mode. Refer to the procedure in the QRH."],
        correct: 1
    },
    {
        question: "When will the ground spoilers fully extend?",
        answers: ["When the speedbrake control lever is set to the FULL position",
                  "If the ground spoilers are armed, the wheel speed exceeds 60 kt and both thrust levers are reset to idle",
                  "If the ground spoilers are armed, the wheel speed exceeds 72 kt and both thrust levers are reset to idle",
                  "When at least one landing gear is on the ground, and both thrust levers are at or below idle"],
        correct: 3
    },
    {
        question: "When does the FUEL L (R) WING TK LO LVL ECAM alert trigger?",
        answers: ["When the associated inner fuel tank quantity is below 750 kg", "When the associated inner fuel tank quantity is below 1,500 kg",
                  "When the combined inner and outer tank quantity on the same wing is below 750 kg",
                  "When the combined inner and outer tank quantity on the same wing is below 1,500 kg"],
        correct: 1
    },
    {
        question: "What do the UNLK lights on the landing gear indicator panel mean?",
        answers: ["They illuminate in amber if the gear is not locked in the selected position",
                  "They illuminate in red if the gear is not locked in the selected position",
                  "They illuminate in amber if the landing gear is not locked down",
                  "They illuminate in red if the landing gear is not locked down"],
        correct: 2
    },
    {
        question: "Select the statement that best describes the parking brake",
        answers: ["The parking brake uses the alternate braking servo valve to apply yellow hydraulic or brake accumulator pressure to the wheel brakes.",
                  "If the parking brake fails, the parking brake must be selected off before the normal braking system can be applied via the brake pedals.",
                  "The parking brake accumulator can maintain parking pressure for at least 24 hr.",
                  "The parking brake uses a dedicated control valve to apply yellow hydraulic or brake accumulator pressure directly to the wheel brakes. This bypasses the alternate braking servo valve"],
        correct: 4
    },
    {
        question: "After an ND failure, which of the following statements is correct?",
        answers: ["The ND cannot be manually transferred to the PFD", "The ND will automatically transfer to the PFD", "The ND can be manually transferred to the PFD", "The ND is lost on that side of the aircraft"],
        correct: 3
    },
    {
        question: "The MIXER unit is connected to:",
        answers: ["Packs, re-circulated cabin air, emergency ram air inlet, and HP ground connector.",
                  "Zone controllers.",
                  "Packs, re-circulated cabin air, emergency ram air inlet, and LP ground connector.",
                  "Only the Packs and re-circulated cabin air."],
        correct: 3
    },
    {
        question: "What protections are available in alternate law?",
        answers: ["Load factor limitation, pitch attitude, bank angle, angle of attack, and high speed.",
                  "There are no protections in alternate law. High speed and low speed stabilities may be available.",
                  "Load factor limitation is the only protection available in alternate law. High speed and low speed stabilities may be available.",
                  "Load factor limitation, pitch attitude, bank angle, low speed, and high speed."],
        correct: 3
    },
    {
        question: "What happens to the avionics ventilation system if both the BLOWER and EXTRACT push buttons are set to override?",
        answers: ["The closed configuration is selected, both fans remain running, and air conditioned air is added to the system.",
                  "Intermediate configuration is selected manually, and the avionics compartment is isolated from the air conditioning system.",
                  "The smoke configuration will be selected. Air conditioned air will enter the system, and all of the extracted air is exhausted overboard (via a small flap on the skin air outlet door). The blower fan stops.",
                  "Air conditioned air will enter the system, and the skin air outlet door will fully open, both fans will continue to run."],
        correct: 3
    },
    {
        question: "Which of the following statements about the use of APU bleed air is correct?",
        answers: ["The use of APU bleed air for wing anti-ice is not permitted",
                  "APU bleed air is available for air conditioning throughout the flight envelope",
                  "The use of APU bleed air for dual pack operation in flight is prohibited",
                  "The use of APU bleed air for wing anti-ice is permitted, provided one pack is turned off"],
        correct: 1
    },
    {
        question: "Where can you view the potable and waste water tank quantities?",
        answers: ["On the Aft Attendant Panel (AAP)", "On the Forward Attendant Panel (FAP) or Aft Attendant Panel (AAP)", "On the Forward Attendant Panel (FAP)", "In the forward lavatory"],
        correct: 3
    },
    {
        question: "Where is the LP ground air supply connector located?",
        answers: ["On the left hand side of the fuselage belly fairing, just ahead of the wing leading edge",
                  "On the aft fuselage next to Water Filling and/or Draining service panel",
                  "On the bottom of the fuselage behind the trailing edge of the wing",
                  "On the underside of the left hand wing, between the engine pylon and fuselage"],
        correct: 1
    },
    {
        question: "What does a green arrow on the bottom of the ECAM status page indicate?",
        answers: ["It indicates a system page needs to be reviewed",
                  "It is displayed if the data on the status page has overflowed off the screen",
                  "It means the ECAM has been completed",
                  "It is a reminder to complete the approach preparation procedures"],
        correct: 2
    },
    {
        question: "Which units make up the Flight Management Guidance System (FMGS)?",
        answers: ["2 x FMGC, 2 x MCDU, 1 X FCU, and 2 x FAC",
                  "2 x FMGC, 2 x MCDU, and 2 x FCU only",
                  "2 x FMC, 2 x AP, 1 x A/THR, 2 x MCDU, 2 x FCU, and 2 x FAC",
                  "2 x FMGC, 2 x MCDU, and 1 x FCU only"],
        correct: 1
    },
    {
        question: "Regarding ECAM, which of the following statements is true?",
        answers: ["An amber message on the E/WD is always accompanied by a Master Caution",
                  "Primary failures are identified by a star (*) next to them",
                  "A Master Caution is always accompanied by an amber message on the E/WD",
                  "Independent failures are identified by a star (*) next to them"],
        correct: 3
    },
    {
        question: "How can the flight crew arm the LOC and GS modes in order to fly an ILS approach?",
        answers: ["Push the APP pushbutton on the FCU. The ILS information (including LOC and G/S scales) will not be displayed on the PFD unless the LS push button is selected on the EFIS panels.",
                  "Push the LS button the EFIS panel located on the glare shield.",
                  "Push the APP pushbutton on the FCU. Once LOC and G/S are armed, ILS information (include G/S and LOC scales) will be displayed automatically on the PFD regardless of the selections made on the EFIS panels.",
                  "Push APP pushbutton FCU, however LOC and G/S modes will not arm or engage unless the LS button has been selected on both FO and CAPT EFIS panels."],
        correct: 4
    },
    {
        question: "How is a temporary flight plan indicated on the ND?",
        answers: ["A solid blue line", "A solid amber line", "A dotted magenta line", "A dashed yellow line"],
        correct: 4
    },
    {
        question: "In Normal Law, what are the limits of the Pitch Attitude protection with flaps Full?",
        answers: ["25° nose up, progressively reduced to 20° at low speed",
                  "There is no limit",
                  "30° nose up",
                  "35° nose up progressively reduced to 20°"],
        correct: 1
    },
    {
        question: "Select the correct statement about the FIRE detection and fault logic for the ENG and APU (select the most complete answer):",
        answers: ["It is not possible to for a Fire Detection Unit (FDU) to distinguish between a loop failure and fire detection.",
                  "When both fire detection loops are serviceable, a fire warning will be triggered whenever one or more loops detect a fire.",
                  "Fire detection loops A and B must both detect a fire to trigger a warning. If one of these loops fails, then FIRE detection is lost for the associated ENG/APU. The flight crew will be notified via ECAM.",
                  "A fire warning is triggered if a break occurs in both fire detection loops within 5 sec of each other (flame effect)."],
        correct: 4
    },
    {
        question: "What protections are available in normal law?",
        answers: ["Load factor limitation, pitch attitude, bank angle, angle of attack, and high speed",
                  "Load factor limitation, pitch attitude, bank angle, low speed, and high speed",
                  "Load factor limitation, high speed stability and low speed stability",
                  "There are no protections in normal law, only stabilities"],
        correct: 1
    },
    {
        question: "The aircraft is fitted with emergency evacuation slides at:",
        answers: ["The four entry doors", "The overwing exits", "The four entry doors and overwing exits", "The overwing exits and cockpit windows"],
        correct: 3
    },
    {
        question: "After a cockpit oxygen mask has been used, how can the mask microphone be cut-off and boom microphone be re-activated?",
        answers: ["Close the left hand door of the mask stowage box, and push the RESET/TEST slide. The OXY ON flag will disappear",
                  "Close both doors on the mask stowage box",
                  "Push the TMR RESET button on the OXYGEN panel",
                  "Move the MASK - BOOM switch on the ACP back to the BOOM position"],
        correct: 1
    },
    {
        question: "Which LGCIU normally controls the retraction cycle?",
        answers: ["LGCIU 1 is the master, and LGCIU 2 is the slave If LGIU 1 fails, LGCIU 2 takes over all functions automatically",
                  "LGCIU 1 is the master when either AP is off or AP1 is engaged, otherwise LGCIU 2 is the master",
                  "One LCIU controls one complete gear cycle, then switches over automatically to the other LGCIU at the completion of the retraction cycle. It also switches over in the case of failure",
                  "LCIU 1 controls the left hand main and nose gears, LGCIU 2 controls the right hand main gear"],
        correct: 3
    },
    {
        question: "What impact does selecting engine and or wing anti-ice have on the engines?",
        answers: ["The N1 or EPR limit is automatically increased to maintain the appropriate thrust rating",
                  "There is no impact on the maximum thrust of the engines",
                  "The N1 or EPR limit is automatically reduced, and the idle N1 or EPR is automatically increased",
                  "Engine anti-ice reduces the N1 or EPR limit, wing anti-ice has a negligible effect on the maximum thrust output of the engines"],
        correct: 3
    },
    {
        question: "When the fuel tanks are completely filled, an allowance of up to ___ total capacity is provided within the system to allow for expansion due to temperature rise",
        answers: ["2%", "3%", "5%", "1%"],
        correct: 1
    },
    {
        question: "The NAV and LOGO switch has two positions, 1 and 2. What is the difference between the two positions?",
        answers: ["Position 1 turns on the logo lights and the first set of navigation lights, position 2 turns on the logo lights and the second set of navigation lights",
                  "Position 1 is for emergency use only",
                  "Position 2 is for emergency use only",
                  "Brightness intensity, where 1 is the brightest"],
        correct: 1
    },
    {
        question: "What is the meaning of a RED light in a flight deck pushbutton?",
        answers: ["An abnormal pushbutton position", "Normal system operation", "A failure requiring immediate action", "A failure that the flight crew should be aware of, but does not call for immediate action"],
        correct: 3
    },
    {
        question: "What are the two main functions of the FMGC?",
        answers: ["Flight management and yaw axis control", "Flight management and flight guidance", "Flight management and flight envelope protection", "Flight guidance and flight envelope protection"],
        correct: 2
    },
    {
        question: "Which system/computer provides the reactive windshear detection function?",
        answers: ["ADIRU 1", "SDAC", "FAC", "The weather radar"],
        correct: 3
    },
    {
        question: "What is the maximum speed with the landing gear extended (VLE)?",
        answers: ["280 kts", "260 kts", "250 kts", "220 kts"],
        correct: 1
    },
    {
        question: "What is the maximum indicated airspeed for opening a cockpit window in flight?",
        answers: ["195 kts", "230 kts", "250 kts", "200 kt"],
        correct: 4
    },
    {
        question: "Maximum reverse thrust should not be used below what airspeed?",
        answers: ["60 kt", "80 kt", "70 kt", "100 kt"],
        correct: 3
    },
    {
        question: "How long can you remain in TOGA thrust?",
        answers: ["Unlimited time", "10 min during single engine operations", "5 min during single engine operations", "10 min during two engine operations"],
        correct: 2
    },
    {
        question: "What is the maximum demonstrated crosswind for the A320?",
        answers: ["38 kt (mean wind)", "36 kt (mean wind)", "38 kt (gusts included)", "36 kt (gusts included)"],
        correct: 3
    },
    {
        question: "What is the maximum tyre speed?",
        answers: ["188 kt", "195 kt", "200 kt", "210 kt"],
        correct: 2
    },
    {
        question: "What is the minimum fuel quantity for takeoff?",
        answers: ["1,500 kg", "1,400 kg", "2,400 kg", "There is no limitation"],
        correct: 1
    },
    {
        question: "What is the runway slope limitation for the A320?",
        answers: ["± 5%", "± 3%", "± 1%", "± 2%"],
        correct: 4
    },
    {
        question: "What is the maximum speed (VFE) with CONF 1+F for the A320?",
        answers: ["185 kt", "230 kt", "177 kt", "215 kt"],
        correct: 4
    },
    {
        question: "What is the maximum wind speed for passenger door operation?",
        answers: ["65 kt", "55 kt", "60 kt", "75 kt"],
        correct: 1
    },
    {
        question: "What is the maximum speed at which the landing gear may be retracted (VLO retraction)?",
        answers: ["260 kt", "220 kt", "280 kt", "250 kt"],
        correct: 2
    },
    {
        question: "What is the maximum speed at which the landing gear may be extended (VLO extension)?",
        answers: ["250 kt", "220 kt", "260 kt", "280 kt"],
        correct: 1
    },
    {
        question: "What is VMO/MMO for the A320?",
        answers: ["380/0.8", "320/0.82", "320/0.77", "350/0.82"],
        correct: 4
    },
    {
        question: "What is the maximum operating altitude with slats and/or flaps extended?",
        answers: ["15,000 ft", "22,500 ft", "20,000 ft", "25,000 ft"],
        correct: 3
    },
    {
        question: "Which hydraulic systems have fire shutoff valves",
        answers: ["green and yellow", "green, blue and yellow", "green and blue", "blue and yellow"],
        correct: 1
    },
    {
        question: "If the upper ECAM DU fails, or is switched off, how can a system or status page be displayed for review?",
        answers: ["Pushing and holding the RCL push button on the ECAM control panel will cycle through each system page",
                  "A momentary press on the associated system page push button on the ECP will toggle between E/WD, and the selected system page on the lower ECAM DU",
                  "Use the EIS DMC rotary selector to put the SD on the Captain's PFD DU",
                  "Pressing and holding the desired system page push button on the ECP will replace the E/WD with the selected system page. Upon releasing the button, the E/WD will return"],
        correct: 4
    },
    {
        question: "What is the function of the GEN 1 LINE push button?",
        answers: ["GEN 1 LINE contactor opens. GEN 1 remains running and powers all fuel pumps",
                  "GEN 1 LINE contactor opens. GEN 1 remains running and supplies one fuel pump in each wing tank",
                  "When selected OFF the avionics compartment isolation valves close",
                  "When selected OFF the GEN 1 powers all AC busses"],
        correct: 2
    },
    {
        question: "What information is required to confirm that the landing gear is down-locked?",
        answers: ["On the WHEEL SD page, at least one green triangle for each landing gear strut is sufficient to confirm that the landing gear is down-locked. Even if a red UNLK light is illuminated on the landing gear indicator panel",
                  "Two green triangles for each landing gear strut on the WHEEL page, plus a green triangle on the landing gear indicator panel is required to confirm that the gear is down-locked",
                  "The landing gear cannot be confirmed as down-locked if any UNLK lights remain illuminated on the landing gear indicator panel",
                  "On the WHEEL SD page, at least two green triangles is required to confirm that the landing gear is down-locked"],
        correct: 1
    },
    {
	question: "The cargo doors are powered by:",
    answers: ["The blue hydraulic system before engine start, and the green hydraulic system after engine start",
              "The blue electric pump",
              "The yellow hydraulic system before engine start, and the green hydraulic system after engine start",
              "The yellow hydraulic system"],
    correct: 4
    },
    {
        question: "ALPHA-FLOOR is available from:",
        answers: ["Slat retraction until landing gear extension",
                  "Slat retraction until 100ft RA in approach",
                  "Liftoff until touchdown",
                  "Liftoff until the aircraft reaches 100 ft RA on approach"],
        correct: 4
    },
    {
        question: "During a successful manual engine start when does the start valve close, and ignition cut off?",
        answers: ["The FADEC automatically closes the start valve and cuts off ignition when N2 reaches 50%",
                  "The start valve closes and igniters cut off when the MAN START push button is set to OFF",
                  "The start valve closes when the MAN START push button is set to OFF. The ignition remains energised until the start sequence has completed, as indicated by a green AVAIL message on the E/WD",
                  "The start valve closes when the flight crew set the MAN START push button to OFF, and the igniters cut-off when the MODE selector is returned to normal"],
        correct: 1
    },
    {
    question: "Select the most complete statement about mechanical backup",
    answers: ["Mechanical backup allows the flight crew to manage a temporary loss of 5 flight control computers. The THS and rudder are mechanically controlled, and hydraulically actuated. MAN PITCH TRIM ONLY (RED) is displayed on the PFD", "While in mechanical backup USE MAN PITCH TRIM (RED) is displayed on the PFD, the THS and RUDDER can be actuated mechanically by the pilot", "Mechanical backup allows the flight crew to manage a temporary loss of 7 flight control computers. The THS and rudder are mechanically controlled and mechanically actuated. MAN PITCH TRIM ONLY (RED) is displayed on the PFD", "If the aircraft finds itself in an abnormal attitude AoB > 125°, AoA >40°, IAS >440kt, the flight law will transition to mechanical backup and stay in this flight law for the remainder of the flight. USE MAN PITCH TRIM (amber) will be displayed on the PFD"],
    correct: 1
    },
    {
    question: "During cockpit preparation, what is the significance of an amber half box around the oxygen pressure indication on the DOOR/OXY page?",
    answers: ["The cockpit oxygen pressure has dropped below 800PSI, this is a no dispatch.", "The pressure in the oxygen bottle is less than 1500PSI. Refer to the limitations section of the FCOM to determine whether the remaining quantity is not below the minimum for the number of occupants in the flight deck.", "The pressure in the oxygen bottle is less than 1000PSI, call engineering to have the oxygen bottle replaced before departure.", "The oxygen pressure in the low pressure circuit is low (60PSI)"],
    correct: 2
    },
    {
    question: "When is T.O. INHIBIT displayed on the EWD?",
    answers: ["1st engine started to 80 kt (phases 2 and 3)", "800 ft to 80 kt (phases 7 and 8)", "First engine to takeoff power to 1,500 ft (phases 3, 4 and 5)", "1st eng to takeoff power to 800 ft (phases 3, 4 and 6)"],
    correct: 3
    },
    {
    question: "Roll control is provided by:",
    answers: ["Ailerons and spoilers 2, 3 and 4", "Ailerons and spoilers 3, 4, and 5", "Ailerons and spoilers 2, 3, 4 and 5", "Ailerons and spoilers 4 and 5"],
    correct: 3
    },
    {
    question: "If the Engine Interface Unit (EIU) fails, what information does the FADEC lose access to?",
    answers: ["Engine sensors", "Thrust lever angle", "Air data from the ADIRS", "Master switch, and engine mode selector position"],
    correct: 4
    },
    {
    question: "What has happened if the ELEC system page appears automatically on the lower ECAM DU, and there are no accompanying ECAM alerts?",
    answers: ["A PRIMARY failure has occurred", "An ADVISORY has occurred; the drifting parameter will be amber", "An ADVISORY has occurred; the drifting parameter will be pulsing green", "An INDEPENDENT failure has occurred"],
    correct: 3
    },
    {
    question: "Select the most complete statement about the APPR pushbutton on the FCU.",
    answers: ["The APPR pushbutton will arm the LOC and G/S modes. Once engaged these approach modes will only disengage in the event of a go-around, or disconnection of AP and FD.", 
              "The APPR pushbutton will arm either the LOC and G/S modes or APP NAV and FINAL modes depending on the approach selected in the active F-PLN. These modes can be disarmed or disengaged by pushing the APPR pushbutton again.", 
              "The APPR pushbutton will arm the LOC and G/S modes independent of the approach selected in the active F-PLN. The LOC and G/S modes can be disarmed or disengaged by pushing the APPR pushbutton again.", 
              "The APPR pushbutton will arm either the LOC and G/S modes or APP NAV and FINAL modes depending on the approach selected in the active F-PLN. Once engaged these approach modes will only disengage in the event of a go-around, or disconnection of AP and FD."],
    correct: 4
	},
	{
		question: "What is the significance of a flashing red light on a cabin door?",
		answers: ["It flashes red if the door is unlocked when at least one engine is running",
				  "It indicates residual cabin pressure. The light flashes red when one or both engines have stopped, the slide has been disarmed and the cabin differential pressure is above 2.5hPa",
				  "It indicates low pressure in the slide inflation cylinder",
				  "The light flashes red if the door control handle is operated, and the slide is armed"],
		correct: 2
	},
  {
    question: "In which MCDU page does the flight crew enter the ZFW and ZFWCG values during cockpit preparation?",
    answers: [
      "On the INIT A page",
      "On the Fuel/ZFW page",
      "On the PERF page",
      "On the INIT B page"
    ],
    correct: 4
  },
  {
    question: "When the ND is set to the PLAN mode, how is the map orientated?",
    answers: [
      "To true north",
      "Oriented along the flight plan track",
      "To the current true track",
      "To the current magnetic track"
    ],
    correct: 1
  },
  {
    question: "Which statement is correct regarding the STROBE switch in AUTO?",
    answers: [
      "The strobe lights come on automatically when the nose landing gear strut is not compressed",
      "The strobe lights come on automatically when the main gear struts are not compressed",
      "The strobe lights come on automatically when take-off thrust is set",
      "The strobe lights come on automatically when both engines are started"
    ],
    correct: 2
  },
  {
    question: "How many shut-off valves are there to isolate the toilets?",
    answers: [
      "Two per toilet",
      "There is no way to isolate the toilets",
      "One for the whole aircraft",
      "One per toilet"
    ],
    correct: 4
  },
  {
    question: "How can the secondary flight plan be activated in flight?",
    answers: [
      "The secondary flight plan can only be activated while the NAV mode is engaged When this condition is met the ACTIVATE SECONDARY prompt will be available on the SEC INDEX page of the MCDU",
      "When HDG or TRK lateral guidance modes are engaged, select the ACTIVATE SECONDARY prompt on the SEC INDEX page of the MCDU. This prompt will not be available in NAV unless the active leg in the primary and secondary are the same",
      "Use the ENABLE ALTN command in the lateral revision page for any waypoint on the flight plan",
      "Select the ACTIVATE SECONDARY prompt on the SEC INDEX page of the MCDU. This feature is available at all times"
    ],
    correct: 2
  },
	{
    question: "Which probes are not heated on the ground?",
    answers: [
      "Pitot probes",
      "AoA probes",
      "Static ports",
      "TAT probes"
    ],
    correct: 4
  },
	{
    question: "What is the standard method for disconnecting the A/THR?",
    answers: [
      "The flight crew press the A/THR instinctive disconnect pushbutton, or set both thrust levers to the IDLE detent",
      "By moving the thrust levers forwards out of the CLB detent (AEO)",
      "The flight crew press the A/THR instinctive disconnect pushbutton, or the A/THR button on the FCU",
      "The A/THR instinctive disconnect pushbutton is the only standard method for disconnecting the A/THR"
    ],
    correct: 1
	},
	{
    question: "During cruise flight, how are the cockpit panels and avionics compartment cooled?",
    answers: [
      "Both the avionics compartment and cockpit panels are cooled using air from the air conditioning system",
      "The avionics ventilation system extracts air from the cockpit panels and avionics compartment, and then removes heat using a skin air heat exchanger",
      "The avionics compartment is cooled by the avionics ventilation system, which uses air conditioned air in the closed configuration. The cabin ventilation system extract valve draws ambient cabin air through the cockpit panels, and then overboard via the outflow valve",
      "The avionics compartment is unpressurised, allowing the avionics to be ventilated using ambient air. The cockpit panels are cooled using air from the air conditioning system"
    ],
    correct: 2
  },
  {
    question: "What is the normal order of priority for supplying power to AC BUS 1?",
    answers: [
      "EXT PWR, APU, GEN1 then GEN2",
      "(GEN1, GEN2), EXT PWR then APU",
      "APU, EXT PWR, GEN1 then GEN2",
      "GEN1, EXT PWR, APU, then GEN2"
    ],
    correct: 2
  },
  {
    question: "What is the significance of a NW STRG DISC memo?",
    answers: [
      "The PF has pushed the rudder PEDALS DISC push button on the hand wheel, to disconnect the rudder pedals from the nose wheel during the flight control check",
      "It indicates that the BSCU has been switched off",
      "The memo appears when the nose wheel steering selector is in the towing position. It will be GREEN when the engines are not running, and AMBER when at least one engine is running",
      "The memo appears when the nose wheel steering selector is in the towing position. It is always GREEN"
    ],
    correct: 3
  },
  {
    question: "What is the normal mode of operation of the FMGS?",
    answers: [
      "Dual mode",
      "Backup navigation mode",
      "Independent mode",
      "Single mode"
    ],
    correct: 1
  },
  {
    question: "Which of the following statements is true regarding the APU Fire Extinguishing system (select the most complete answer)?",
    answers: [
      "3 sec after an APU FIRE warning on the ground, the APU performs an emergency shutdown, and the extinguisher bottle discharges automatically",
      "Immediately after an APU fire warning on the ground, the APU automatically shuts down, and the extinguisher bottle discharges automatically",
      "3 sec after a fire warning, the APU automatically shuts down. The flight crew should follow ECAM actions to secure the APU and fire the squib",
      "There are two fire agent bottles for the APU one is discharged automatically if a fire is detected on the ground, and the other can be discharged by the flight crew at any time"
    ],
    correct: 1
  },
  {
    question: "What is the meaning of a GREEN light in a flight deck pushbutton?",
    answers: [
      "Normal operation of a system used temporarily",
      "A test result or maintenance information",
      "An abnormal pushbutton position",
      "Normal system operation"
    ],
    correct: 4
  },
  {
    question: "What happens to the wing and engine anti-ice valves when the hot air supply is unavailable?",
    answers: [
      "Wing anti-ice valves close, engine anti-ice valves close",
      "Wing anti-ice valves open, engine anti-ice valves open",
      "Wing anti-ice valves close, engine anti-ice valves open",
      "Wing anti-ice valves open, engine anti-ice valves close"
    ],
    correct: 1
  },
  {
    question: "What would happen if the APU master switch was turned off immediately following the use of APU bleed?",
    answers: [
      "APU continues to run for a cooling period of 60 to 120 sec",
      "APU continues to run for a cooling period of 30 to 60 sec",
      "APU shuts down immediately",
      "APU continues to run for a cooling period of 45 to 90 sec"
    ],
    correct: 1
  },
  {
    question: "What impact does a HYD G+Y SYS LO PR alert have on the braking system?",
    answers: [
      "The system will automatically select alternate brakes without anti-skid, using the brake accumulator only. The accumulator can supply at least 7 full brake application",
      "The system will automatically select alternate brakes with anti-skid, using the blue hydraulic system",
      "The system will automatically select alternate brakes with anti-skid, using the yellow hydraulic system accumulator only. Anti-skid remains available because the BSCU is serviceable",
      "Normal braking will be lost. To recover brakes, the flight crew must manually select alternate brakes by moving the A/SKID and N/W STRG switch to OFF. Up to 7 brake applications will be possible using the braking accumulator"
    ],
    correct: 1
  },
 {
    question: "What does an amber half box around the FOB on the EWD indicate?",
    answers: [
      "The fuel quantity indicated is unreliable",
      "The indicated fuel quantity is less than 1,500 kg",
      "The fuel quantity indicated is inaccurate",
      "Not all of the displayed fuel quantity is usable"
    ],
    correct: 4
  },
  {
    question: "Which of the following options contains only managed AP / FD modes?",
    answers: [
      "NAV, HDG, LOC, RWY, RWY TRK",
      "NAV, LOC, GS, RWY, RWY TRK, GA TRK, FPA",
      "NAV, APPR NAV, LOC, RWY, RWY TRK, GA TRK",
      "NAV, OP CLB, OP DES, LOC, RWY, RWY TRK, GA TRK"
    ],
    correct: 3
  },
  {
    question: "How is an altitude constraint, that the FMGS predicts will not be met, indicated?",
    answers: [
      "A magenta star on the MCDU CLIMB page, and a magenta circle around the affected waypoint on the ND",
      "An amber star on the MCDU F-PLN page, and an amber circle around the affected waypoint on the ND",
      "An amber altitude on the MCDU F-PLN page",
      "A message in the MCDU scratchpad"
    ],
    correct: 2
  },
  {
    question: "Which of the following statements best describes high speed protection?",
    answers: [
      "High speed protection will not allow the aircraft to overshoot VMO/MMO unless forward sidestick input is applied, in this case the airspeed will never exceed VMO+16 / MMO + 0.04. When the sidestick is released the bank angle is maintained, the maximum AoB is reduced to 45°",
      "High speed protection is 1 of 5 protections in normal law, and is the only protection available in alternate law",
      "High speed protection is activated at or above VMO/MMO (depending on the flight conditions), a permanent nose-up order is applied to aid recovery back towards normal flight conditions. With no sidestick input the aircraft will roll to wings level, and the maximum bank angle is reduced to 40°",
      "High speed protection will activate at VMO + 16 kt / MMO + 0.04, a permanent nose-up order is applied to aid recovery back towards normal flight conditions. The airspeed will settle at or below VMO even with full forward sidestick input"
    ],
    correct: 3
  },
  {
    question: "How can the flight crew dry crank an engine?",
    answers: [
      "Set the MODE selector to CRANK, and the MAN START push button to ON.",
      "Leave the MODE selector in IGN/START, confirm that the MASTER switch is OFF, and set the MAN START push button to ON",
      "Dry cranking (engine ventilation) is always performed automatically by the FADEC when then residual EGT temperature is too high",
      "Set the MODE selector to CRANK, and the MASTER switch to ON."
    ],
    correct: 1
  },
  {
    question: "What happens when the landing gear is selected down on approach?",
    answers: [
      "The WHEEL page appears on the LOWER ECAM DU",
      "The STATUS page appears on the LOWER ECAM DU, in all cases",
      "The WHEEL push button on the ECAM control panel illuminates",
      "If it is not empty, the STATUS page appears on the LOWER ECAM DU"
    ],
    correct: 1
  },
	{
    question: "What happens to the avionics ventilation system if only the EXTRACT push button is set to override?",
    answers: [
        "The system enters closed circuit configuration, and air is added from the air conditioning system. This is a useful configuration to consider during heavy rain on the ground",
        "The system enters the intermediate configuration, and air is added from the air conditioning system. This configuration may be selected to help exhaust smoke or fumes overboard",
        "The extract fan will stop and the skin heat exchanger is bypassed. The open configuration will be selected on the ground, and intermediate in flight",
        "Open configuration is selected, both fan remain running. This improves ventilation following a duct overheat"
	],
    correct: 2
	},
{
    question: "When is auto-start abort and automatic dry cranking available?",
    answers: [
        "During an automatic engine start in any phase of flight",
        "Auto start abort is available during any automatic start cycle. However the flight crew must consider applying the engine ventilation (dry cranking) procedure following a start abort",
        "During an automatic start on the ground only",
        "During any engine start (manual or automatic) on the ground. However when in flight auto start abort is only available during automatic starts"
    ],
    correct: 2
},
{
    question: "Which of the following statements best describes bank angle protection?",
    answers: [
        "Full sidestick deflection will give a roll rate of 30°/s and the bank angle will not exceed 67°",
        "Above 33° an input on the sidestick will be required to hold the bank attitude. Full deflection will give a roll rate of 15°/s and the bank angle will not exceed 67°",
        "The bank angle limit in flight mode is 67°, this reduces to 33° while HIGH SPEED protection is active, and 40° when HIGH AoA protection is active",
        "An input is required on the sidestick to hold any bank attitude. When the sidestick is released the aircraft will automatically roll wings level. Full deflection will give a roll rate of 15°/s and the bank angle will not exceed 67°"
    ],
    correct: 2
},
	{
    question: "What areas of the aircraft are anti-iced with hot air?",
    answers: [
        "Engine air intakes, the three outboard leading edge slats of each wing, the THS and rudder leading edge",
        "Engine air intakes, all leading edge slats on each wing",
        "Engine air intakes, the four outboard leading edge slats of each wing, and the flight deck windows",
        "Engine air intakes, and the three outboard leading edge slats of each wing"
    ],
    correct: 4
},
	{
    question: "Which statement about the FAC is true?",
    answers: [
        "The FAC is a flight control computer, and does not form part of the FMGS",
        "When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function will automatically select the A.FLOOR A/THR mode, when the conditions for its activation are met",
        "When the AP is engaged the master FMGC sends rudder trim orders to the FACs. The FACs sole purpose are to provide yaw damping, rudder trim and rudder travel limitation functions",
        "When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function performs the alpha protection in normal law"
    ],
    correct: 2
},
	{
    question: "What happens if the DITCHING push button is selected ON? (select the most complete answer)",
    answers: [
        "A close signal will be sent to the emergency ram air valve, and pack flow control valves",
        "A close signal will be sent to the outflow valve, avionics ventilation inlet and outlet, emergency ram air valve, and pack flow control valves",
        "A close signal will be sent to the outflow valve, emergency ram air valve, and pack flow control valves",
        "A close signal will be sent to the outflow valve, avionics ventilation inlet and avionics ventilation outlet"
    ],
    correct: 2
},
{
    question: "Select the correct statement about the potable water system:",
    answers: [
        "The potable water is normally pressurised by the pneumatic system",
        "A vacuum generator is used to distribute potable water around the aircraft",
        "The potable water tank is maintained at the same pressure as the cabin. Electric pumps are used to distribute the water",
        "When the engines are not running a foot pump in each toilet can be used to pump water to the sink"
    ],
    correct: 1
},
	{
    question: "What impact does a HYD G SYS LO PR alert have on the braking system?",
    answers: [
        "Normal braking will continue to operate using the yellow hydraulic system",
        "Normal braking will be lost To recover brakes, the flight crew must manually select alternate brakes by moving the A/SKID and N/W STRG switch to OFF",
        "The system will automatically select alternate brakes without anti-skid, using the yellow hydraulic system",
        "The system will automatically select alternate brakes with anti-skid, using the yellow hydraulic system"
    ],
    correct: 4
},
	{
    question: "What is the standard operating procedure for the EOSID stop altitude?",
    answers: [
        "MHA",
        "MSA",
        "SID stop altitude",
        "No procedure specified"
    ],
    correct: 4
},
	{
    question: "Where is the correct place to find RWY COND EFB entry for takeoff?",
    answers: [
        "EFB MORE app",
        "OM-B",
        "OM-A",
        "QRH"
    ],
    correct: 2
},
	{
    question: "What is the correct runway condition in EFB PERF for takeoff if the runway is damp?",
    answers: [
        "Dry",
        "Neither dry nor wet",
        "Wet"
    ],
    correct: 1
},
	{
    question: "If using Reverse Idle, what is the correct choice in the EFB LDG PERF?",
    answers: [
        "Yes",
        "No"
    ],
    correct: 2
},
	{
    question: "Where can the *maximum* acceleration altitude be found on the EFB TO PERF page?",
    answers: [
        "Must be manually calculated using FCOM",
        "Adding 4000ft to acceleration altitudes calculated",
        "By tapping on the flex temperature",
        "On the last page of computations"
    ],
    correct: 4
},
	{
    question: "What is considered to be a 'forward' CG at takeoff?",
    answers: [
        "Less than or equal to 27%",
        "Less than 30%",
        "Less than 27%",
        "Less than or equal to 30%"
    ],
    correct: 3
},
	{
    question: "In the event of a last minute decision to use engine bleed to supply packs, what correction must be applied?",
    answers: [
        "Subtract two degrees from flex",
        "Initial calculations cover this change. No action required.",
        "Subtract one degree from flex",
        "No correction available. Recalculate speeds and flex."
    ],
    correct: 4
},
	{
    question: "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -13°C?",
    answers: [
        "25 kts",
        "10 kts",
        "29 kts",
        "38 kts"
    ],
    correct: 1
},
{
    question: "In the event of a QNH reduction by 2 hPa on taxi-out what correction must be applied?",
    answers: [
        "Subtract two degrees from flex",
        "No correction available. Recalculate speeds and flex.",
        "Subtract one degree from flex",
        "Initial calculations cover this change. No action required."
    ],
    correct: 3
},
	{
    question: "If a runway is wet and NOTAMed 'slippery when wet', what is the correct EFB TO PERF input for RWY COND?",
    answers: [
        "Slippery Wet",
        "2-Medium to Poor",
        "3-Medium",
        "Wet"
    ],
    correct: 1
},
{
    question: "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 5mm of water on the runway?",
    answers: [
        "2- Medium to Poor",
        "3- Medium",
        "6- Dry",
        "5- Good"
    ],
    correct: 1
},
{
    question: "For an in-flight landing calculation, what is the maximum crosswind with 5 mm of water?",
    answers: [
        "10 kts",
        "20 kts",
        "29 kts",
        "15 kts"
    ],
    correct: 2
},
{
    question: "Following a double FMGC failure how can the navigation radios be tuned?",
    answers: [
        "Select the NAV key (under the transparent switch guard) on RMP 1, 2 or 3. Any RMP can tune any navigation radio",
        "Select the NAV key (under the transparent switch guard) on RMP 1 and 2. Each RMP tunes its respective onside VOR and ADF radios. The both ILS receivers can be tuned from either RMP1 or 2",
        "The MCDU can be used in back-up tuning mode, allowing the MCDU to communicate directly with the navigation radios",
        "Select the NAV key (under the transparent switch guard) on RMP 1 and 2. The ILS frequency must be tuned separately in each RMP to ensure that the localiser and glideslope indications are available on both PFDs"
    ],
    correct: 2
},
{
    question: "How many igniters are used during an automatic engine start?",
    answers: [
        "Igniter A is used by default for all start attempts on the ground, if A fails then B is automatically selected. In flight both igniters are used",
        "One igniter (A or B) is used on the first automatic start attempt on the ground. In flight both igniters are used for all starts attempts",
        "Only one igniter (A or B) is used for all automatic start attempts",
        "Both igniters are used for all engines starts, unless a circuit breaker for an individual igniter has been pulled"
    ],
    correct: 2
},
	{
    question: "On the PFD, what causes the indicated barometric altitude to change colour (digital value)?",
    answers: [
        "Diverging > 250 ft from FCU altitude: The current altitude digits turn steady amber",
        "At and below 400RA: the current altitude digits are steady amber",
        "Passing 750 ft to go to FCU altitude: The current altitude digits turn steady amber",
        "Below MDA (or the MDH) entered in the MCDU Perf Page: The current altitude digits are steady amber"
    ],
    correct: 1
},
{
  question: "The aircraft is on the ground with external power plugged into the aircraft, and the APU running. How can the APU generator be connected to the electrical system?",
  answers: [
    "By pushing the EXT PWR pb when the green AVAIL light is illuminated",
    "By pushing the APU MASTER SW pb-sw",
    "By pushing the EXT PWR pb when the blue ON light is illuminated",
    "By pushing the APU START pb-sw"
  ],
  correct: 3
},
{
  question: "How many igniters are used during an automatic engine start?",
  answers: [
    "Only one igniter (A or B) is used for all automatic start attempts",
    "Igniter A is used by default for all start attempts on the ground, if A fails then B is automatically selected. In flight both igniters are used",
    "One igniter (A or B) is used on the first automatic start attempt on the ground. In flight both igniters are used for all starts attempts",
    "Both igniters are used for all engines starts, unless a circuit breaker for an individual igniter has been pulled"
  ],
  correct: 3
},
{
  question: "What supporting evidence would you expect to see following an EIS DMC 1(2)(3) FAULT alert?",
  answers: [
    "INVALID DATA displayed on the affected DU(s)",
    "MAP NOT AVAIL displayed on the affected DU(s)",
    "PLEASE WAIT displayed on the affected DU(s)",
    "The affected DU(s) will be blank"
  ],
  correct: 1
},
{
  question: "What are the basic modes of the AP / FD?",
  answers: [
    "ALT and NAV",
    "Pitch and roll",
    "HDG and VS",
    "SPD and HDG"
  ],
  correct: 3
},
{
  question: "What is the maximum altitude that APU bleed can be used to assist an engine start?",
  answers: [
    "15,000 ft",
    "20,000 ft",
    "25,000 ft",
    "22,500 ft"
  ],
  correct: 2
},
{
question: "What impact does a CAB PR SYS 1 FAULT alert have?",
  answers: [
    "The pressurisation system will be operating in semi-automatic mode. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob on the CABIN PRESS panel",
    "If CPC 1 was active at the time of the failure, CPC 2 will need to be selected manually by the flight crew",
    "The outflow valve will operate at half speed",
    "If CPC 1 was active at the time of the failure, CPC 2 will take over automatically. This alert is for crew awareness only (Level 1 ECAM alert)"
  ],
  correct: 4
},
{
  question:
    "Optimised (fine adjustment) of cockpit and cabin zone temperatures is achieved via the use of:",
  answers: [
    "A hot air pressure regulating valve and 3 trim air valves",
    "Emergency Ram air valve",
    "Two pack control valves",
    "PACK bypass valves"
  ],
  correct: 1
},
{
  question:
    "What does a blue ON light mean in the EXT PWR pushbutton?",
  answers: [
    "The external power line contactor is closed. EXT PWR will automatically connect to the AC1 and or AC2 busses following the normal bus tie priorities",
    "The external power contactor is open",
    "The EXT PWR contactor is closed. EXT PWR takes priority over all other sources of AC power",
    "External power is plugged in and parameters are normal"
  ],
  correct: 1
},
  {
    question: "During a flex takeoff, the thrust reduction must not exceed _____ of flat-rated thrust.",
    answers: ["No restrictions", "20%", "25%"],
    correct: 3
  },
  {
    question: "For sample aircraft G-EZGY, find the minimum control speed at landing — assume sea level, ISA conditions:",
    answers: ["116 kt", "110 kt", "114 kt", "113 kt"],
    correct: 4
  }
),

	  
];

window.questions = questions;


































