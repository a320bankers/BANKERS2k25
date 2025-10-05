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
        question: "Can wing anti-ice be used when on engine is inoperative?",
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
        question: "What happens when the landing gear is selected down on approach",
    answers: ["The WHEEL push button on the ECAM control panel illuminates", "If it is not empty, the STATUS page appears on the LOWER ECAM DU", "The WHEEL page appears on the LOWER ECAM DU", "The STATUS page appears on the LOWER ECAM DU, in all cases"],
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
        answers: ["The effected spoiler is automatically retracted, and the symmetrical one on the other wing is inhibited", "The effected spoiler is automatically retracted, and this may lead to asymmertrical spoiler deployment", "The effected spoiler retains the deflectionm it has at the time of the loss, and the symmetrical one on the other wing is inhibited", "The effected spoiler retains the deflection it has at the time of the loss, this may lead to asymmetrical depolyment of the spoilers"],
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
        answers: ["The failure of CPC 1+2", "The active CPC is no longer receiving the landing field elevation automatically from the FMGS. The flight crew must set the MODE SEL push button to MAN on the CABIN PRESS panel", "The active CPC is no longer receiving the landing fiel elevation automatically from the FMGS. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob on the CABIN PRESS panel", "The outflow valve has failed to fully open after landing"],
        correct: 3
    },
    {
        question: "What is the significance of the green coloured circuit breakers?",
        answers: ["Green collared circuit breakers are AC powered", "Green collared circuit breakers are pulled when flying on battery power only", "Green collared circuit breakers are not to be reset", "Green collared circuit breakers are monitoreed by the ECAM"],
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
        question: "What is the normal order of priority for supplying power to AC BUS 1?",
        answers: ["GEN1, EXT PWR, APU, then GEN2",
                  "APU, EXT PWR, GEN1 then GEN2",
                  "(GEN1, GEN2), EXT PWR then APU",
                  "EXT PWR, APU, GEN1 then GEN2"],
        correct: 1
    },
    {
        question: "How can the flight crew arm the LOC and GS modes in order to fly an ILS approach?",
        answers: ["Push the APP pushbutton on the FCU. The ILS information (including LOC and G/S scales) will not be displayed on the PFD unless the LS push button is selected on the EFIS panels.",
                  "Push the LS button the EFIS panel located on the glare shield.",
                  "Push the APP pushbutton on the FCU. Once LOC and G/S are armed, ILS information (include G/S and LOC scales) will be displayed automatically on the PFD regardless of the selections made on the EFIS panels.",
                  "Push APP pushbutton FCU, however LOC and G/S modes will not arm or engage unless the LS button has been selected on both FO and CAPT EFIS panels."],
        correct: 1
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
    question: "Select the correct starter limitation for the CFM engine:",
    answers: ["A 15 minute cooling period is required following 4 failed start cycles", "A 20 minute cooling period is required following 3 failed start cycles", "A 60 minute cooling period is required following 3 consecutive start attempts", "A 10 second pause is required between each start cycle"],
    correct: 1
},
{
    question: "Regarding speed symbols on the PFD, which statement is true?",
    answers: ["The yellow speed trend arrow indicates the speed the aircraft will reach in 15 sec", "Managed speed is represented by a magenta speed bug", "Selected speed is represented by a magenta speed bug", "Mach No. is not displayed below 0.6"],
    correct: 2
},
{
    question: "What has happened if the ELEC system page appears automatically on the lower ECAM DU, and there are no accompanying ECAM alerts?",
    answers: ["A PRIMARY failure has occurred", "An ADVISORY has occurred; the drifting parameter will be amber", "An ADVISORY has occurred; the drifting parameter will be pulsing green", "An INDEPENDENT failure has occurred"],
    correct: 3
},
{
    question: "What information is always available on the permanent data section of the SD?",
    answers: ["G LOAD", "Gross weight", "Metric altitude", "TAT (Total Air Temperature)"],
    correct: 4
},
{
    question: "What impact does a FWS FWC 1+2 FAULT have?",
    answers: ["All SD pages except for the status page are lost", "Most ECAM cautions and warnings are lost. Rural warnings (i.e., stall and over speed) remain available", "All ECAM warnings are lost, amber ECAM cautions and the status page remains available", "All ECAM cautions and warnings, rural warnings, master caution and master warning lights are lost"],
    correct: 4
},
{
    question: "Typically when will direct law be active?",
    answers: ["Significant system failures (i.e., EEC) will typically reconfigure the flight law directly from normal to direct law, regardless of configuration", "Direct law is the flare mode for alternate law. Alternate reconfigures to direct law when the landing gear is extended", "Direct law is the flare mode for normal law. Normal law blends into direct law at 50 ft radio altitude", "Direct law is only available on the ground, and transitions into normal law during the first 5 sec after liftoff"],
    correct: 2
},
{
    question: "When opened in an emergency, the passenger entry doors:",
    answers: ["Are electrically assisted into the open position", "Will need two cabin crew to push them open", "Will be driven open automatically by a damper actuator when the door is armed and the handle is lifted", "Are assisted to the open position by slide inflation"],
    correct: 3
},
{
    question: "ALPHA-FLOOR is available from:",
    answers: ["Liftoff until touchdown", "Liftoff until the aircraft reaches 100 ft RA on approach", "Slat retraction until 100ft RA in approach", "Slat retraction until landing gear extension"],
    correct: 2
},
{
    question: "What is cost index (CI)?",
    answers: ["The ratio of fuel cost (CF) to flight time cost (CT)", "The ratio of engine wear cost (CE) to fuel cost (CF)", "Fuel cost (CF)", "The ratio of flight time cost (CT) to fuel cost (CF)"],
    correct: 4
},
{
    question: "When will the SEL light illuminate on each RMP?",
    answers: ["If VHF1 is tuned by RMP2, the SEL light will be illuminated on all RMPs", "If the NAV pushbutton has been selected, the SEL light will be illuminated on all RMPs", "If VHF1 is tuned by RMP2, the SEL light will be illuminated on RMP1 and RMP2 only", "If the NAV pushbutton has been selected, the SEL light will be illuminated on RMP1 and RMP2 only"],
    correct: 1
},
{
    question: "Select the correct statement about the ADIRS panel.",
    answers: ["The ADR and IR parts of an ADIRU cannot not be switched off individually", "When securing the aircraft both the IR mode selectors and ADR pushbutton switches should be set to OFF. This is to prevent the aircraft batteries from being drained", "If an IR is turned off by mistake in flight, it can be recovered provided it is switched back on within 5 min", "The ADR or IR part of an ADIRU can be individually switched OFF using the IR or ADR pushbuttons. Setting the IR Mode Selector to OFF will remove power from the whole ADIRU"],
    correct: 4
},
{
    question: "The FAULT (amber) light is illuminated in the ENG 1 pump pushbutton, when will this light extinguish?",
    answers: ["When the pushbutton is selected OFF for all cases excluding reservoir low air pressure", "The FAULT light will remain illuminated as long as the fault condition remains (low pressure, low level, etc.), regardless of the pushbutton position", "When the pushbutton is selected OFF for all cases", "When the pushbutton is selected OFF for all cases excluding reservoir overheat. The FAULT light will remain on as long as the overheat lasts"],
    correct: 4
},
{
    question: "Where do the wing anti-ice indications appear on the ECAM screens?",
    answers: ["When selected ANTI-ICE appears in white on the ECAM bleed page, and the WING A.ICE ECAM memo appears in green on the EWD", "When selected WING A.ICE appears on the ECAM status page", "There are no indications for wing anti-ice on the ECAM screens", "A white triangle appears on the ECAM bleed page"],
    correct: 1
},
{
    question: "What speed will the FMGS use in an expedite climb?",
    answers: ["The largest speed is Green Dot, which is maintained with pitch control", "200 kt below 10,000 ft", "ECON climb speed", "250 kt/ M0.76 kt above 10,000 ft"],
    correct: 1
},
{
    question: "Above what cabin altitude will the cabin oxygen masks be deploy automatically?",
    answers: ["12,000 ft", "16,000 ft", "9,550 ft", "14,000 ft"],
    correct: 4
},
{
    question: "Is it possible to parallel AC generators on the same BUS?",
    answers: ["Only with the RAT deployed", "Only one engine generator may be paralleled with the APU", "Yes", "The electrical system will not allow paralleling of generators"],
    correct: 4
},
{
    question: "How many flight control computers are there?",
    answers: ["7: 3 x ELACs, 2 x SECs, 2 x FACs", "5: 2 x ELACs, 3 x SECs", "8: 3 x ELACs, 3 x SECs, 2 x FACs", "7: 2 x ELACs, 3 x SECs, 2 x FACs"],
    correct: 4
},
{
    question: "Which statement about the FAC is true?",
    answers: ["When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function performs the alpha protection in normal law", "When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function will automatically select the A-FLOOR A/THR mode, when the conditions for its activation are met", "The FAC is a flight control computer, and does not form part of the FMGS", "When the AP is engaged the master FMGC sends rudder trim orders to the FACs. The FACs sole purpose are to provide yaw damping, rudder trim and rudder travel limitation functions"],
    correct: 3
},
{
    question: "During cockpit preparation, what is the significance of an amber half box around the oxygen pressure indication on the DOOR/OXY page?",
    answers: ["The cockpit oxygen pressure has dropped below 800PSI, this is a no dispatch.", "The pressure in the oxygen bottle is less than 1500PSI. Refer to the limitations section of the FCOM to determine whether the remaining quantity is not below the minimum for the number of occupants in the flight deck.", "The pressure in the oxygen bottle is less than 1000PSI, call engineering to have the oxygen bottle replaced before departure.", "The oxygen pressure in the low pressure circuit is low (60PSI)"],
    correct: 2
},
{
    question: "What are the two main functions of the FMGC?",
    answers: ["Flight management and flight guidance", "Flight management and flight envelope protection", "Flight guidance and flight envelope protection", "Flight management and yaw axis control"],
    correct: 1
},
{
    question: "Which of the following statements regarding the FWC, ELAC and FAC is true (select the most complete answer)?",
    answers: ["The FWC generates the OVERSPEED warnings, the ELAC performs the HIGH SPEED protection, and the FAC computes and displays characteristic speeds on the PFD", "The FWC computes and displays the characteristic speed on the PFD, the ELAC performs the A.FLOOR protection, and the FAC is only active when the AP is engaged", "The FWC generates the OVERSPEED warnings, the ELAC performs the HIGH SPEED protection, and the FAC only performs yaw related functions (rudder trim/limits/damping)", "The FWC generates the OVERSPEED warnings, the ELAC performs the LOW SPEED protection, and the FAC only performs yaw related functions (rudder trim/limits/damping)"],
    correct: 1
},
{
    question: "How can the flight crew dry crank an engine?",
    answers: ["Dry cranking (engine ventilation) is always performed automatically by the FADEC when the residual EGT temperature is too high", "Set the MODE selector to CRANK, and the MASTER switch to ON.", "Set the MODE selector to CRANK, and the MAN START push button to ON", "Leave the MODE selector in IGN/START, confirm that the MASTER switch is OFF, and set the MAN START push button to ON"],
    correct: 3
},
{
    question: "Which flight control computers receive inputs from the sidestick?",
    answers: ["ELAC, SEC and FAC", "ELAC and SEC", "SEC only", "ELAC only"],
    correct: 2
},
{
    question: "Select the correct statement about the ADIRS panel.",
    answers: ["The ADR and IR parts of an ADIRU cannot not be switched off individually", "When securing the aircraft both the IR mode selectors and ADR pushbutton switches should be set to OFF. This is to prevent the aircraft batteries from being drained", "The ADR or IR part of an ADIRU can be individually switched OFF using the IR or ADR pushbutton. Setting the IR Mode Selector to OFF will remove power from the whole ADIRU", "If an IR is turned off by mistake in flight, it can be recovered provided it is switched back on within 5 min"],
    correct: 3
},
{
    question: "Which of the following statements best describes the operation of the fuel transfer valve(s)?",
    answers: ["The transfer valve can be used to balance the fuel", "When a low fuel level is sensed in an inner tank (< 750 kg), one transfer valve will open in the associated wing only", "When a low fuel level is sensed in an inner tank (< 750 kg), one transfer valve will open in each wing", "The transfer valves will not open until the total fuel on board reaches 1,500 kg"],
    correct: 2
},
{
    question: "What happens to the avionics ventilation system if both the BLOWER and EXTRACT push buttons are set to override?",
    answers: ["The closed configuration is selected, both fans remain running, and air conditioned air is added to the system", "Intermediate configuration is selected manually, and the avionics compartment is isolated from the air conditioning system", "Air conditioned air will enter the system, and the skin air outlet door will fully open, both fans will continue to run", "The smoke configuration will be selected. Air conditioned air will enter the system, and all of the extracted air is dumped overboard (via a small flap on the skin air outlet door). The Blower Fan stops."],
    correct: 4
},
{
    question: "Which of the following statements best describe a level 3 ECAM alert?",
    answers: ["A steady red master warning light, a red warning message on the E/WD, automatic call of the relevant system page, and a CRC, specific sound or synthetic voice", "A flashing red master warning light, a red warning message on the E/WD, automatic call of the relevant system page, and a CRC, specific sound or synthetic voice", "A steady amber master caution light, an amber caution message on the E/WD, automatic call of the relevant system page, but no aural sound", "A steady amber master caution light, an amber caution message on the E/WD, automatic call of the relevant system page, and a single chime"],
    correct: 2
},
{
    question: "What impact does a CAB PR SYS 1+2 FAULT alert have?",
    answers: ["The pressurisation system will automatically select manual mode. The flight crew can take immediate control of the outflow valve using the MAN V/S CTL switch", "Both cabin pressure controllers have failed. The flight crew will set the MODE SEL push button to MAN and adjust the position of the outflow valve as required.", "Control of the outflow valve has been lost. The flight crew should begin a normal descent to FL100/MEA, but also be prepared to initiate an emergency descent if required.", "Both cabin pressure controllers have failed, the flight crew will need to immediately initiate an emergency descent"],
    correct: 2
},
{
    question: "During a single engine taxi, engine 1 is running and engine 2 is off. What happens when the ENG MODE selector is moved from NORM to IGN/START?",
    answers: ["The engine 2 FADEC is powered ready for engine start only.", "The ENG SD page appears, the engine 2 FADEC is powered (amber crosses disappear for engine parameters), and the pack valves close. Continuous ignition for engine 1 has been manually selected.", "There will be no impact to engine 2 because its FADEC is already powered by the aircraft electrical system, and the SD page will already be displayed. Continuous ignition, using one igniter (A or B), will be selected for engine 1.", "Continuous ignition, using both ignitors (A+B), will be selected for both engines"],
    correct: 2
},
{
    question: "All flight control surfaces are:",
    answers: ["Hydraulically controlled", "Mechanically actuated", "Mechanically controlled", "Hydraulically actuated"],
    correct: 4
},
{
    question: "The thrust levers are moved to the TOGA detent during takeoff. Which configuration would you expect the avionics ventilation system to select if the OAT is 40°C?",
    answers: ["Closed", "Normal", "Intermediate", "Open"],
    correct: 1
},
{
    question: "If the upper ECAM DU fails, or is switched off, how can a system or status page be displayed for review?",
    answers: ["Use the EIS DMC rotary selector to put the SD on the Captain’s PFD DU", "Pushing and holding the RCL push button on the ECAM control panel will cycle through each system page", "Pushing and holding the desired system page push button on the ECP will replace the E/WD with the selected system page. Upon releasing the button, the E/WD will return", "A momentary press on the associated system page push button on the ECP will toggle between the E/WD, and the selected system page on the lower ECAM DU"],
    correct: 3
},
{
    question: "Which computer generates amber cautions?",
    answers: ["DU", "FWC", "DMC", "SDAC"],
    correct: 2
},
{
    question: "How many channels does a SFCC have?",
    answers: ["2 channels: 1 SLAT and 1 FLAP", "SFCC 1 contains 2 SLAT channels, SFCC 2 contains 2 FLAP channels", "4 channels: 2 SLAT and 2 FLAP", "2 identical channels for redundancy"],
    correct: 1
},
{
    question: "When is T.O. INHIBIT displayed on the EWD?",
    answers: ["1st engine started to 80 kt (phases 2 and 3)", "800 ft to 80 kt (phases 7 and 8)", "First engine to takeoff power to 1,500 ft (phases 3, 4 and 5)", "1st eng to takeoff power to 800 ft (phases 3, 4 and 6)"],
    correct: 3
},
{
    question: "What impact does a CAB PR SYS 1 FAULT alert have?",
    answers: ["If CPC 1 was active at the time of the failure, CPC 2 will need to be selected manually by the flight crew", "The outflow valve will operate at half speed", "If CPC 1 was active at the time of the failure, CPC 2 will take over automatically. This alert is for crew awareness only (Level 1 ECAM alert)", "The pressurisation system will be operating in semi-automatic mode. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob on the CABIN PRESS panel."],
    correct: 3
},
{
    question: "How is the outflow valve actuated?",
    answers: ["One electric motor, controlled by either CPC 1, CPC 2 or via the MAN V/S CTL switch", "One of two electric motors One automatic, one manual", "One of three electric motors Two automatic, one manual", "Three electric motors, all automatic"],
    correct: 3
},
{
    question: "When will the approach phase activate?",
    answers: ["At the FAF altitude when on a precision approach", "Automatically when overflying the DECEL pseudo waypoint with NAV, LOC* or LOC engaged. It can also be manually activated by selecting ACTIVATE APPR PHASE on the PERF page", "Automatically when approx 15 NM from arrival aerodrome in any flight guidance mode", "It can only be manually selected on the MCDU PERF page by either pilot"],
    correct: 2
},
{
    question: "Can wing anti-ice be used when one engine is inoperative?",
    answers: ["Yes, provided the x-bleed is selected open, one pack is selected off and the fire push button has not been pushed", "Yes, APU bleed air can be used for wing anti-ice", "No. It is not possible for one engine bleed to supply air to both wings for anti-icing", "Yes, the crossbleed will automatically open after the wing anti-ice has been selected ON"],
    correct: 1
},
{
    question: "How many independent channels are there in a Flight Augmentation Computer?",
    answers: ["4 channels: Yaw damper, rudder trim, rudder travel limit, and flight envelope", "3 channels: Yaw damper, rudder trim and rudder travel limit", "2 channels: Yaw damper and rudder trim", "2 identical channels for redundancy"],
    correct: 4
},
{
    question: "When will the autobrake system activate following a rejected takeoff?",
    answers: ["Manually extending the speed brake lever immediately after setting the thrust levers to idle will activate the autobrake", "The autobrake will activate as soon as both thrust levers are brought back to the idle detent, and the wheel speed is above 40 kt", "The command for ground spoiler deployment from the SECs (wheel speed > 72 kt) will activate the autobrake", "The autobrake will activate when reverse thrust is selected on a least one thrust lever, and the wheel speed is above 40 kt"],
    correct: 3
},
{
    question: "When will the FADEC select the modulated idle mode?",
    answers: ["Whenever the flaps are retracted (FLAPS at zero position)", "When flaps are retracted in flight, or on the ground provided reverse is not selected", "In flight when the flap lever is not at the zero position", "Whenever the thrust lever is in the REV IDLE position"],
    correct: 3
},
{
    question: "Which DMCs can receive information from ADIRU 3?",
    answers: ["DMC 1 or 3. Following the failure of ADIRU1, ADIRU3 will automatically connect to the Captain’s PFD", "DMC 1, 2 and 3. However only air data can supplied by ADIRU3 to DMC 1 and 2", "DMC 1, 2; or 3 depending on the configuration of the ATT HDG and AIR DATA rotary selectors on the switching panel", "DMC 3 only The EIS DMC selector on the switching-panel, can be used to display ADIRU 3 data via DMC 3 on either the CAPT or FO PFD"],
    correct: 3
},
{
    question: "Which computer controls all datalink communications between the aircraft and the ground (Airline and or ATC)?",
    answers: ["RMP", "FMGC", "MCDU", "ATSU"],
    correct: 4
},
{
    question: "Which VHF antenna is located on the lower fuselage?",
    answers: ["VHF 3", "VHF 2", "None. All three are located on the upper fuselage", "VHF 1"],
    correct: 2
},
{
    question: "On the ground, which configuration would you expect the avionics ventilation system to select if the OAT is 3°C on an overcast day?",
    answers: ["Open", "Intermediate", "Closed", "Normal"],
    correct: 3
},
{
    question: "On the ECAM E/WD, when does the LDG INHIBIT (magenta) memo appear?",
    answers: ["Below 2,000 ft radio altitude", "With selection of FLAP 2 on the approach", "Below 800 ft radio altitude", "With selection of GEAR DOWN"],
    correct: 3
},
{
    question: "If a system page push button fails on the ECAM control panel, can the corresponding system page still be viewed?",
    answers: ["No, the associated system page is no longer available", "Yes, but only if an ECAM alert is triggered for the related system, in this case the system page is automatically displayed. The page cannot be selected manually", "Yes, the associated system page can still be viewed via the use of the RCL pushbutton", "Yes. The ALL button allows the flight crew to select the desired SD page. This provides redundancy in the case of an ECAM control panel failure"],
    correct: 4
},
{
    question: "Select the correct statement about the wingtip brakes (WTB):",
    answers: ["The WTBs activate in case of an uncommanded movement of the slats or flaps, such as runaway, asymmetry or overspeed. If the slat WTB is on, the flaps will still operate", "The wing tip brakes will only activate when asymmetry is detected with either the flap or slat system. The flap lever should remain in the position it was in at the time of WTB activation", "The WTBs activate when the flap or slat position disagree with the flap lever selection. If any WTB is on, both slats and flaps are locked in position, and cannot be released in flight", "The WTBs activate in case of an uncommanded movement of the slats or flaps, such as runaway, asymmetry or overspeed. If any WTB is on, both slats and flaps are locked in position, and cannot be released in flight"],
    correct: 4
},
{
    question: "On the ECAM display, which colour is used to make the crew aware of an abnormal configuration or failure, and no immediate action is required?",
    answers: ["Red", "Blue", "Amber", "White"],
    correct: 3
},
{
    question: "On the EFB T.O PERF page, how can MEL items be added to assure performance requirements are met?",
    answers: ["On the last page of computations", "Must be manually calculated using FCOM", "By tapping on the flex temperature", "Dialog box in bottom left of T.O PERF page"],
    correct: 4
},
{
    question: "What is maximum value of Approach Correction",
    answers: ["5 kt", "15 kt", "10 kt"],
    correct: 2
},
{
    question: "What is the maximum speed (VFE) with CONF FULL for the A320",
    answers: ["177 kt", "195 kt", "185 kt", "175 kt"],
    correct: 1
},
{
    question: "On which display(s) can the ground speed and TAS be viewed?",
    answers: ["In the top right hand corner of the ND in only the ARC or NAV modes", "On the PDF or in the top left hand corner of the ND", "In the top left corner of the ND in only NAV and ARC modes", "In the top left corner of the ND in all modes"],
    correct: 4
},
{
    question: "What is the primary method of communication for datalink messages controlled via the ATSU?",
    answers: ["The datalink system primarily uses HF2", "The datalink system primarily uses VHF3", "The datalink system primarily uses SATCOM", "The datalink system uses a dedicated UHF radio"],
    correct: 2
},
{
    question: "The MIXER unit is connected to:",
    answers: ["Only the packs and re-circulated cabin air", "Packs, re-circulated cabin air, emergency ram air inler, and HP ground connector", "Zone controllers", "Packs, re-circulated cabin air, emergency ram air inler, and LP ground connector"],
    correct: 4
},
{
    question: "Select the correct statementa bout the AGENT pushbuttons on the FIRE panel",
    answers: ["It is not possible to have an amber DISCH light without a white SQUID light on a AGENT pushbutton", "The agent buttons are always active allowing a bottle to be fired at any time, independent of the associated FIRE pushbutton position", "The DISCH light illuminates in amber as soon as the squid is fired for the corresponding bottle", "The DISCH light illuminates in amber when the corresponding fire extinguisher bottle has lost pressure"],
    correct: 4
},
{
    question: "With the ATT HDG switch set to CAPT 3, and AIR DATA switch set to NORM: which computer(s) will be providing air, attitude and heading data to the Captain's PFD?",
    answers: ["ADIRU 3 will be providing air data, and ADIRU 1 attitude and heading data", "ADIRU 2 will be providing air data, and ADIRU 1 attitude and heading data", "ADIRU 3 will be providing all air, attitude and heading data", "ADIRU 1 will be providing air data, and ADIRU 3 attitude and heading data"],
    correct: 4
},
{
    question: "Which of the following communication methods are used for datalink messages?",
    answers: ["VHF only", "SATCOM only", "VHF or HF only", "VHF, HF or SATCOM (where fitted and available)"],
    correct: 4
},
{
    question: "Select the correct statement about the AGENT pushbuttons on the FIRE panel",
    answers: ["After an ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s), this helps identify the agents to be activated", "When the associated FIRE PB (ENG or APU) is released SQUIB illuminates in amber on the corresponding agent pushbutton(s)", "After a ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s). After the bottle has been discharged the SQUIB light is replaced by an amber DISCH light", "When the associated FIRE PB (ENG or APC)) is released SQUIB illuminates in white on the corresponding agent pushbutton(s)"],
    correct: 3
},
{
    question: "How can the flight crew arm the LOC and GS modes in order to fly an ILS approach?",
    answers: ["Push the APP pushbutton on the FCCJ. Once LOC and G/S are armed ILS information (include G/S and LOC scales) will be displayed automatically on the PFD regardless of the selections made on the EFIS panels", "Push the APP pushbutton on the FCU. The ILS information (including LOC and G/S scales) will not be displayed on the PFD unless the LS push button is selected on the EFIS panels", "Push the LS button the EFIS panel located on the glareshield", "Push APP pushbutton FCU, however LOC and G/S modes will not arm or engage unless the LS button has been selected on both FO and CAPT EFIS panels"],
    correct: 1
},
{
    question: "Both engines and the APU are running, what must the flight crew do before selecting APU bleed? (X-BLEED set to AUTO)",
    answers: ["The engine bleeds must be selected OFF, and crossbleed set to OPEN, before selecting the APU bleed to ON", "The engine bleeds must be selected OFF before selecting the APU bleed to ON. The crossbleed valve can remain in AUTO as it will open automatically", "Nothing, upon selecting APU bleed the crossbleed valve will automatically open, and each engine bleed valve will automatically close", "Turn ENG 1 bleed OFF, and confirm that the crossbleed is closed, before selecting APU bleed ON"],
    correct: 3
},
{
    question: "When does the green AVAIL light illuminate on the APU start push button?",
    answers: ["When N is above 93%", "When N is above 90%", "When N is above 95%", "N = 100%"],
    correct: 3
},
{
    question: "Which ECAM alert level signifies a dangerous configuration, flight condition or a system failure that alters flight safety?",
    answers: ["Level 3", "Advisory", "Level 2", "Level 1"],
    correct: 1
},
{
    question: "During gravity gear extension, in which direction should the GRAVITY GEAR EXTENSION handle be rotated, and what happens during each turn?",
    answers: ["Clockwise, 2 turns. The first turn isolates the gear from the green hydraulic system, the second unlocks the doors and allows the gear to drop into the extended position", "Clockwise, 3 turns. The first turn isolates the gear from the green hydraulic system, the second unlocks the doors, the third releases the uplocks and allows the gear to drop into the extended position", "Anti-clockwise, one complete rotation will isolate the landing gear from the hydraulic system, and simultaneously release the up-locks. The gear will push the doors open as it extends", "Anti-clockwise, 3 turns. The first turn isolates the gear from the yellow hydraulic system, the second unlocks the doors, the third releases the up-locks and allows the gear to drop into the extended position"],
    correct: 2
}

];

window.questions = questions;






