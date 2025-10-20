export const metadata = {
  title: 'Electronics Masterclass for Kids — NAMAH',
  description:
    'A 12-month, 24-session electronics lab series for Grades 3–12 covering circuits, sensors, 555 IC projects, and Raspberry Pi applications.',
};

const quickFacts = [
  { label: 'Duration', value: '24 classes across 12 months (2 per month)' },
  { label: 'Format', value: 'Hands-on labs · 60-minute sessions' },
  { label: 'Ages', value: 'Grades 3–12 (leveled instruction)' },
  { label: 'Location', value: 'Toronto, ON · NAMAH Community Hub' },
];

const enrollmentSteps = [
  'Complete the registration form with student and guardian details.',
  'Receive a confirmation email with cohort placement and tuition details.',
  'Join the virtual parent orientation to review safety and logistics.',
  'Arrive for your first lab session—materials provided on site.',
];

const programOutline = [
  {
    month: 'Month 1 · Introduction to Electronics Basics',
    focus: 'Discover electricity flow, components, and LED behavior.',
    classes: [
      {
        title: 'Class 1: What is Electricity? (Circuits and LEDs)',
        objective: 'Understand basic current flow and introduce diodes/LEDs.',
        materials: 'Batteries, wires, LEDs, resistors (220Ω), breadboards.',
        activity:
          'Build a simple LED circuit; test with and without a resistor. Younger students light LEDs; older students calculate resistor values using Ohm’s Law. Discuss diodes as one-way valves.',
      },
      {
        title: 'Class 2: Diodes in Action',
        objective: 'Explore diode functions for rectification and protection.',
        materials: '1N4007 diodes, LEDs, batteries, multimeters.',
        activity:
          'Test diode polarity with a multimeter and build a half-wave rectifier circuit to light an LED from a simulated AC source. Connect real-world applications such as power adapters.',
      },
    ],
  },
  {
    month: 'Month 2 · Resistors and Capacitors',
    focus: 'Combine resistors and capacitors to manage current and timing.',
    classes: [
      {
        title: 'Class 3: Resistor Networks',
        objective: 'Learn series/parallel resistors and voltage division.',
        materials: 'Mixed resistor values, breadboards, LEDs, multimeters.',
        activity:
          'Assemble series and parallel LED circuits and measure voltages. Younger students match color bands; older students design a voltage divider.',
      },
      {
        title: 'Class 4: Capacitors and Timing',
        objective: 'Introduce capacitors for storing and releasing charge.',
        materials: 'Capacitors (10µF, 100µF), resistors, LEDs.',
        activity:
          'Build an RC circuit to create a slow LED blink. Observe charge/discharge curves and discuss timing in electronics.',
      },
    ],
  },
  {
    month: 'Month 3 · Transistor Basics',
    focus: 'Use transistors as switches and amplifiers.',
    classes: [
      {
        title: 'Class 5: Transistors as Switches',
        objective: 'Control circuits using transistors.',
        materials: 'NPN transistors (2N2222), resistors, LEDs, push buttons.',
        activity:
          'Build a transistor switch that turns on an LED with a button. Younger students assemble with guidance; older students explain current amplification.',
      },
      {
        title: 'Class 6: Transistor Amplifiers',
        objective: 'Amplify small signals.',
        materials: 'Transistors, resistors, small speakers or buzzers, microphones.',
        activity:
          'Create a simple audio amplifier circuit and test with a microphone or tone generator app. Discuss transistor roles in radios and audio gear.',
      },
    ],
  },
  {
    month: 'Month 4 · Combining Components',
    focus: 'Design multi-component logic and timing circuits.',
    classes: [
      {
        title: 'Class 7: LED Chasers and Logic',
        objective: 'Build multi-LED circuits with transistor logic.',
        materials: 'Transistors, LEDs, resistors, buttons, wires.',
        activity:
          'Design a three-LED chaser using transistor switches with control buttons. Introduce AND/OR logic through physical circuits.',
      },
      {
        title: 'Class 8: Introduction to the 555 Timer',
        objective: 'Understand timer ICs and oscillators.',
        materials: '555 IC, capacitors, resistors, LEDs.',
        activity:
          'Build an astable multivibrator to blink an LED. Measure frequency with a stopwatch and tune timing components.',
      },
    ],
  },
  {
    month: 'Month 5 · 555 IC Projects',
    focus: 'Create alarms and PWM controllers with the 555 timer.',
    classes: [
      {
        title: 'Class 9: 555 Timer Alarms',
        objective: 'Trigger timed outputs using monostable mode.',
        materials: '555 IC, buzzers, buttons, capacitors, resistors.',
        activity:
          'Assemble a monostable 555 circuit that sounds a buzzer for a set time. Younger learners test durations; older learners calculate timing constants.',
      },
      {
        title: 'Class 10: PWM with the 555',
        objective: 'Explore Pulse Width Modulation fundamentals.',
        materials: '555 IC, potentiometers, LEDs or DC motors.',
        activity:
          'Build a PWM circuit to dim an LED or control motor speed. Discuss applications in robotics and lighting.',
      },
    ],
  },
  {
    month: 'Month 6 · Sensors and Inputs',
    focus: 'Integrate light and temperature sensors into circuits.',
    classes: [
      {
        title: 'Class 11: Light Sensors (LDRs)',
        objective: 'Use photo-resistors for detection.',
        materials: 'Light-dependent resistors, transistors, LEDs.',
        activity:
          'Create a light-activated switch where a transistor turns on an LED in the dark. Test with flashlights and shading.',
      },
      {
        title: 'Class 12: Temperature Sensors',
        objective: 'Read analog temperature changes.',
        materials: 'Thermistors, 555 IC, buzzers, resistors.',
        activity:
          'Build a temperature alarm circuit where a 555 triggers a buzzer above a threshold. Compare readings using hand warmth.',
      },
    ],
  },
  {
    month: 'Month 7 · Motors and Outputs',
    focus: 'Control DC and servo motors safely.',
    classes: [
      {
        title: 'Class 13: DC Motors with Transistors',
        objective: 'Switch motors while protecting circuits.',
        materials: 'DC motors, transistors, diodes, batteries.',
        activity:
          'Use a transistor to switch a DC motor on and off, adding a diode for flyback protection. Discuss robotics use cases.',
      },
      {
        title: 'Class 14: Servo Motors and the 555',
        objective: 'Generate PWM for precise position control.',
        materials: 'Servo motors, 555 IC, potentiometers, LEDs.',
        activity:
          'Control a servo’s angle using a 555-based PWM signal. Younger students move between preset angles; older students calibrate timing.',
      },
    ],
  },
  {
    month: 'Month 8 · Intermediate Projects',
    focus: 'Combine previous skills into themed builds.',
    classes: [
      {
        title: 'Class 15: Traffic Light Simulator',
        objective: 'Sequence LEDs with transistors and timers.',
        materials: '555 IC, transistors, red/yellow/green LEDs, resistors.',
        activity:
          'Build a traffic light circuit with timed phases. Tune cycle lengths with capacitors and resistors.',
      },
      {
        title: 'Class 16: Simple Oscillator Games',
        objective: 'Create sound-based interactive circuits.',
        materials: '555 IC, speakers, capacitors, resistors.',
        activity:
          'Design a tone generator for simple musical games. Adjust frequencies to play short tunes.',
      },
    ],
  },
  {
    month: 'Month 9 · Introduction to Raspberry Pi',
    focus: 'Set up Raspberry Pi and interface with hardware.',
    classes: [
      {
        title: 'Class 17: Raspberry Pi Setup and Basics',
        objective: 'Assemble hardware and explore the OS.',
        materials: 'Raspberry Pi kits, SD cards, monitors, keyboards.',
        activity:
          'Boot Raspberry Pi OS, navigate the desktop, and update software via the terminal.',
      },
      {
        title: 'Class 18: GPIO Pins',
        objective: 'Control outputs from the Pi.',
        materials: 'Raspberry Pi, breadboards, LEDs, resistors.',
        activity:
          'Connect an LED to GPIO and write Python scripts to blink it. Modify code for custom patterns.',
      },
    ],
  },
  {
    month: 'Month 10 · Pi Programming Basics',
    focus: 'Write Python code for outputs and inputs.',
    classes: [
      {
        title: 'Class 19: Python on the Pi',
        objective: 'Use loops and conditionals to control hardware.',
        materials: 'Raspberry Pi, LEDs, breadboards.',
        activity:
          'Program multiple LEDs with Python, experimenting with sequencing and patterns.',
      },
      {
        title: 'Class 20: Inputs with the Pi',
        objective: 'Read sensors and trigger responses.',
        materials: 'Raspberry Pi, buttons, LDRs, resistors.',
        activity:
          'Detect button presses or light levels and trigger LED or buzzer responses.',
      },
    ],
  },
  {
    month: 'Month 11 · Pi Projects with Electronics',
    focus: 'Replace hardware timers with Python logic.',
    classes: [
      {
        title: 'Class 21: Pi-Controlled Timer',
        objective: 'Simulate 555 timers with code.',
        materials: 'Raspberry Pi, LEDs, buzzers.',
        activity:
          'Build a timed LED/buzzer routine in Python with user input for duration.',
      },
      {
        title: 'Class 22: Sensor Data Logging',
        objective: 'Capture and analyze sensor data.',
        materials: 'Raspberry Pi, temperature sensors (DS18B20), SD cards.',
        activity:
          'Log temperature data to the console and explore simple plotting options for older students.',
      },
    ],
  },
  {
    month: 'Month 12 · Advanced Pi Applications',
    focus: 'Combine mechanics, code, and networking.',
    classes: [
      {
        title: 'Class 23: Robot Basics on the Pi',
        objective: 'Control motors with GPIO and drivers.',
        materials: 'Raspberry Pi, motors, motor drivers (L293D).',
        activity:
          'Program a wheeled robot to move forward and backward using GPIO outputs.',
      },
      {
        title: 'Class 24: IoT Intro with the Pi',
        objective: 'Build a simple networked controller.',
        materials: 'Raspberry Pi with internet access, LEDs.',
        activity:
          'Set up a lightweight Flask app to toggle an LED remotely and discuss home automation ideas.',
      },
    ],
  },
];

const faqs = [
  {
    question: 'Do students need prior electronics experience?',
    answer:
      'No prior experience is required. We scaffold activities with differentiated tracks for elementary, middle, and high school participants.',
  },
  {
    question: 'Are materials included in the program fee?',
    answer:
      'Yes. NAMAH supplies all components, safety equipment, and Raspberry Pi hardware for on-site use. Supplemental kits for at-home practice are available for purchase.',
  },
  {
    question: 'Can parents observe sessions?',
    answer:
      'Parents and guardians are welcome to observe from the designated seating area during the first session and during project showcases.',
  },
  {
    question: 'Is there a virtual option?',
    answer:
      'Core labs are in-person. Selected Raspberry Pi coding modules include optional virtual check-ins with recorded walkthroughs for review.',
  },
];

export default function ElectronicsMasterclassPage() {
  return (
    <article style={{display:'grid', gap:'3rem'}}>
      <section style={{background:'linear-gradient(135deg, #f2faf7, #dff3ea)', borderRadius:'20px', padding:'2.5rem', display:'grid', gap:'1.5rem'}}>
        <div style={{display:'grid', gap:'0.75rem'}}>
          <div style={{fontSize:'0.85rem', letterSpacing:'0.08em', fontWeight:600, color:'#0a6', textTransform:'uppercase'}}>Featured Program</div>
          <h1 style={{fontSize:'2.4rem', margin:0}}>Electronics Masterclass for Kids</h1>
          <p style={{margin:0, lineHeight:1.7, maxWidth:'720px', color:'#1b1b1b'}}>
            A year-long makerspace experience guiding Grade 3–12 learners from fundamental circuits to Raspberry Pi powered projects. Each lab blends theory, hands-on building, and collaborative reflection with leveled scaffolding for every age group.
          </p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:'1rem'}}>
          {quickFacts.map((fact) => (
            <div key={fact.label} style={{background:'#fff', borderRadius:'14px', padding:'1.25rem', boxShadow:'0 1px 4px rgba(10,102,73,0.1)', border:'1px solid rgba(10,102,73,0.12)'}}>
              <div style={{fontSize:'0.75rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'#0a6', fontWeight:600, marginBottom:'0.4rem'}}>{fact.label}</div>
              <div style={{fontSize:'1.05rem', fontWeight:600, color:'#123'}}>{fact.value}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex', flexWrap:'wrap', gap:'0.75rem'}}>
          <a href="#register" style={{padding:'0.75rem 1.4rem', borderRadius:'999px', background:'#0a6', color:'#fff', fontWeight:600}}>Register Now</a>
          <a href="#curriculum" style={{padding:'0.75rem 1.4rem', borderRadius:'999px', border:'2px solid #0a6', color:'#0a6', fontWeight:600}}>View Full Curriculum</a>
        </div>
      </section>

      <section style={{display:'grid', gap:'2rem', alignItems:'start'}}>
        <div style={{display:'grid', gap:'0.6rem'}}>
          <h2 style={{fontSize:'1.9rem', margin:0}}>Program Highlights</h2>
          <p style={{margin:0, lineHeight:1.7, color:'#333', maxWidth:'780px'}}>
            Each two-part monthly module builds mastery through repetition, reflection, and age-appropriate extensions. Younger learners focus on guided assembly, middle grades dive into vocabulary and measurement, and high school participants tackle troubleshooting, optimization, and coding challenges.
          </p>
        </div>
        <div style={{display:'grid', gap:'1rem'}}>
          {enrollmentSteps.map((step, index) => (
            <div key={step} style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:'0.75rem', alignItems:'start', padding:'1rem 1.25rem', border:'1px solid #e5f2ec', borderRadius:'12px', background:'#f9fcfa'}}>
              <div style={{height:'32px', width:'32px', borderRadius:'50%', background:'#0a6', color:'#fff', display:'grid', placeItems:'center', fontWeight:700}}>{index + 1}</div>
              <p style={{margin:0, lineHeight:1.6, color:'#234'}}>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="register" style={{display:'grid', gap:'1.5rem'}}>
        <div>
          <h2 style={{fontSize:'1.9rem', marginBottom:'0.5rem'}}>Registration Form</h2>
          <p style={{margin:0, maxWidth:'700px', lineHeight:1.7, color:'#333'}}>
            Submit one form per student. We will confirm placement, tuition, and schedule details within 5 business days. Limited seats are available for our mixed-age lab cohorts.
          </p>
        </div>
        <form
          name="electronics-masterclass"
          method="POST"
          action="/events/electronics-masterclass-for-kids/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          style={{display:'grid', gap:'1.5rem', padding:'2rem', border:'1px solid #e5e5e5', borderRadius:'16px', background:'#fafafa'}}
        >
          <input type="hidden" name="form-name" value="electronics-masterclass" />
          <p style={{display:'none'}}>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Student Name *</span>
              <input type="text" name="student-name" required style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}} />
            </label>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Student Age *</span>
              <input type="number" name="student-age" min="7" max="18" required style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}} />
            </label>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Grade Level *</span>
              <select name="grade-level" required style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}}>
                <option value="">Select grade</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </label>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Guardian Name *</span>
              <input type="text" name="guardian-name" required style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}} />
            </label>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Guardian Email *</span>
              <input type="email" name="guardian-email" required style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}} />
            </label>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Guardian Phone *</span>
              <input type="tel" name="guardian-phone" required placeholder="e.g. 416-555-1234" style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}} />
            </label>
          </div>
          <div style={{display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Preferred Cohort *</span>
              <select name="preferred-cohort" required style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}}>
                <option value="">Select an option</option>
                <option value="saturdays-am">Saturdays · Morning (9:30–10:30 AM)</option>
                <option value="saturdays-pm">Saturdays · Afternoon (1:30–2:30 PM)</option>
                <option value="waitlist">Waitlist / Flexible</option>
              </select>
            </label>
            <label style={{display:'grid', gap:'0.4rem'}}>
              <span style={{fontWeight:600}}>Student Interests</span>
              <select name="student-interest" style={{padding:'0.7rem 0.9rem', borderRadius:'8px', border:'1px solid #ccc'}}>
                <option value="">Select an option</option>
                <option value="electronics-basics">Electronics Basics</option>
                <option value="coding">Coding &amp; Raspberry Pi</option>
                <option value="robotics">Robotics &amp; Making</option>
                <option value="exploring">Exploring &amp; Not Sure Yet</option>
              </select>
            </label>
          </div>
          <label style={{display:'grid', gap:'0.4rem'}}>
            <span style={{fontWeight:600}}>Accommodation or questions</span>
            <textarea name="accommodations" rows={4} placeholder="Tell us about learning needs, allergies, or anything else we should know." style={{padding:'0.9rem', borderRadius:'10px', border:'1px solid #ccc', lineHeight:1.5}} />
          </label>
          <label style={{display:'flex', alignItems:'flex-start', gap:'0.6rem', fontSize:'0.95rem', lineHeight:1.5}}>
            <input type="checkbox" name="consent" required style={{marginTop:'4px'}} />
            <span>
              I confirm that I am the parent/guardian of the student and agree to NAMAH contacting me about program details, tuition, and safety policies.
            </span>
          </label>
          <button type="submit" style={{padding:'0.85rem 1.6rem', borderRadius:'10px', background:'#0a6', color:'#fff', fontWeight:700, border:'none', cursor:'pointer'}}>Submit Registration</button>
        </form>
      </section>

      <section id="curriculum" style={{display:'grid', gap:'2rem'}}>
        <div>
          <h2 style={{fontSize:'1.9rem', marginBottom:'0.5rem'}}>Full 12-Month Curriculum</h2>
          <p style={{margin:0, maxWidth:'760px', lineHeight:1.7, color:'#333'}}>
            Explore each month’s focus to see how learners progress from fundamental electronics to Raspberry Pi powered experiences. Every class follows a structure of mini-lesson, build time, and reflection.
          </p>
        </div>
        <div style={{display:'grid', gap:'1.5rem'}}>
          {programOutline.map((module) => (
            <div key={module.month} style={{border:'1px solid #e5e5e5', borderRadius:'16px', padding:'1.75rem', display:'grid', gap:'1.2rem', background:'#fff'}}>
              <header style={{display:'grid', gap:'0.35rem'}}>
                <h3 style={{margin:0, fontSize:'1.4rem'}}>{module.month}</h3>
                <p style={{margin:0, color:'#444', lineHeight:1.6}}>{module.focus}</p>
              </header>
              <div style={{display:'grid', gap:'1.25rem'}}>
                {module.classes.map((session) => (
                  <div key={session.title} style={{borderLeft:'4px solid #0a6', paddingLeft:'1rem', display:'grid', gap:'0.4rem'}}>
                    <h4 style={{margin:0, fontSize:'1.15rem'}}>{session.title}</h4>
                    <p style={{margin:0, lineHeight:1.6}}><strong>Objective:</strong> {session.objective}</p>
                    <p style={{margin:0, lineHeight:1.6}}><strong>Materials:</strong> {session.materials}</p>
                    <p style={{margin:0, lineHeight:1.6}}><strong>Activity:</strong> {session.activity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{display:'grid', gap:'1.25rem'}}>
        <h2 style={{fontSize:'1.9rem', margin:0}}>Frequently Asked Questions</h2>
        <div style={{display:'grid', gap:'0.9rem'}}>
          {faqs.map((item) => (
            <details key={item.question} style={{border:'1px solid #e5e5e5', borderRadius:'12px', padding:'1.1rem 1.3rem', background:'#fdfdfd'}}>
              <summary style={{fontWeight:600, fontSize:'1.05rem', cursor:'pointer', color:'#123'}}>{item.question}</summary>
              <p style={{marginTop:'0.75rem', lineHeight:1.6, color:'#333'}}>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
