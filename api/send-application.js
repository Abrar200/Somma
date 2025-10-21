// api/send-application.js
import nodemailer from 'nodemailer';

const EMAIL_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'dukaniethnicstore@gmail.com',
    pass: 'cquh pjqh hlyi cafy'
  }
};

// Format application data into readable HTML email
function formatApplicationEmail(data) {
  const position = data.position || 'General Application';
  
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B7355 0%, #D4AF37 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .section { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px; border-left: 4px solid #D4AF37; }
        .section h2 { color: #8B7355; margin-top: 0; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; }
        .field { margin: 15px 0; padding: 10px; background: white; border-radius: 3px; }
        .field-label { font-weight: bold; color: #8B7355; display: block; margin-bottom: 5px; }
        .field-value { color: #333; white-space: pre-wrap; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🍽️ New Application for Somma</h1>
          <p>Position: ${position}</p>
        </div>
  `;

  // General Information Section
  if (data.full_name || data.first_name || data.email) {
    html += `<div class="section"><h2>📋 General Information</h2>`;
    
    if (data.full_name) html += `<div class="field"><span class="field-label">Full Name:</span><span class="field-value">${data.full_name}</span></div>`;
    if (data.first_name || data.last_name) html += `<div class="field"><span class="field-label">Name:</span><span class="field-value">${data.first_name || ''} ${data.last_name || ''}</span></div>`;
    if (data.email) html += `<div class="field"><span class="field-label">Email:</span><span class="field-value">${data.email}</span></div>`;
    if (data.phone) html += `<div class="field"><span class="field-label">Phone:</span><span class="field-value">${data.phone}</span></div>`;
    if (data.position) html += `<div class="field"><span class="field-label">Position Applied:</span><span class="field-value">${data.position}</span></div>`;
    if (data.work_rights) html += `<div class="field"><span class="field-label">Right to Work in Australia:</span><span class="field-value">${data.work_rights}</span></div>`;
    if (data.rsa_cert || data.rsa_certificate) html += `<div class="field"><span class="field-label">RSA Certificate:</span><span class="field-value">${data.rsa_cert || data.rsa_certificate}</span></div>`;
    
    html += `</div>`;
  }

  // Availability Section
  if (data.availability || data.shift_availability || data.shifts || data.hours_per_week || data.start_date) {
    html += `<div class="section"><h2>📅 Availability</h2>`;
    
    if (data.availability) html += `<div class="field"><span class="field-label">Availability:</span><span class="field-value">${data.availability}</span></div>`;
    if (data.shift_availability) html += `<div class="field"><span class="field-label">Shift Availability:</span><span class="field-value">${data.shift_availability}</span></div>`;
    if (data.shifts) html += `<div class="field"><span class="field-label">Preferred Shifts:</span><span class="field-value">${Array.isArray(data.shifts) ? data.shifts.join(', ') : data.shifts}</span></div>`;
    if (data.hours_per_week) html += `<div class="field"><span class="field-label">Hours Per Week:</span><span class="field-value">${data.hours_per_week}</span></div>`;
    if (data.start_date) html += `<div class="field"><span class="field-label">Available Start Date:</span><span class="field-value">${data.start_date}</span></div>`;
    
    html += `</div>`;
  }

  // Experience Section
  if (data.experience || data.hospitality_experience || data.bio) {
    html += `<div class="section"><h2>💼 Experience</h2>`;
    
    if (data.experience) html += `<div class="field"><span class="field-label">Years of Experience:</span><span class="field-value">${data.experience}</span></div>`;
    if (data.hospitality_experience) html += `<div class="field"><span class="field-label">Hospitality Experience:</span><span class="field-value">${data.hospitality_experience}</span></div>`;
    if (data.bio) html += `<div class="field"><span class="field-label">About Themselves:</span><span class="field-value">${data.bio}</span></div>`;
    if (data.why_somma) html += `<div class="field"><span class="field-label">Why Somma:</span><span class="field-value">${data.why_somma}</span></div>`;
    
    html += `</div>`;
  }

  // Role-specific sections
  if (data.position === 'waiter' && (data.years_experience || data.difficult_customer)) {
    html += `<div class="section"><h2>🍽️ Waiter/Waitress Specific</h2>`;
    if (data.years_experience) html += `<div class="field"><span class="field-label">FOH Experience:</span><span class="field-value">${data.years_experience}</span></div>`;
    if (data.difficult_customer) html += `<div class="field"><span class="field-label">Handling Difficult Customers:</span><span class="field-value">${data.difficult_customer}</span></div>`;
    if (data.carrying_confidence) html += `<div class="field"><span class="field-label">Carrying Multiple Plates:</span><span class="field-value">${data.carrying_confidence}</span></div>`;
    if (data.handle_mistakes) html += `<div class="field"><span class="field-label">Handling Mistakes:</span><span class="field-value">${data.handle_mistakes}</span></div>`;
    if (data.pos_experience) html += `<div class="field"><span class="field-label">POS Experience:</span><span class="field-value">${data.pos_experience}</span></div>`;
    if (data.upselling) html += `<div class="field"><span class="field-label">Upselling Approach:</span><span class="field-value">${data.upselling}</span></div>`;
    if (data.speed_vs_accuracy) html += `<div class="field"><span class="field-label">Speed vs Accuracy:</span><span class="field-value">${data.speed_vs_accuracy}</span></div>`;
    if (data.communication) html += `<div class="field"><span class="field-label">Team Communication:</span><span class="field-value">${data.communication}</span></div>`;
    if (data.uniform_sizes) html += `<div class="field"><span class="field-label">Uniform Sizes:</span><span class="field-value">${data.uniform_sizes}</span></div>`;
    if (data.shift_rotation) html += `<div class="field"><span class="field-label">Shift Rotation Adaptability:</span><span class="field-value">${data.shift_rotation}</span></div>`;
    html += `</div>`;
  }

  if (data.position === 'chef' && (data.cuisine_type || data.culinary_training)) {
    html += `<div class="section"><h2>👨‍🍳 Chef/Cook Specific</h2>`;
    if (data.cuisine_type) html += `<div class="field"><span class="field-label">Cuisine Type:</span><span class="field-value">${data.cuisine_type}</span></div>`;
    if (data.culinary_training) html += `<div class="field"><span class="field-label">Culinary Training:</span><span class="field-value">${data.culinary_training}</span></div>`;
    if (data.time_management) html += `<div class="field"><span class="field-label">Time Management:</span><span class="field-value">${data.time_management}</span></div>`;
    if (data.food_safety) html += `<div class="field"><span class="field-label">Food Safety Approach:</span><span class="field-value">${data.food_safety}</span></div>`;
    if (data.handle_criticism) html += `<div class="field"><span class="field-label">Handling Criticism:</span><span class="field-value">${data.handle_criticism}</span></div>`;
    if (data.prep_cook_plate) html += `<div class="field"><span class="field-label">Prep/Cook/Plate Comfort:</span><span class="field-value">${data.prep_cook_plate}</span></div>`;
    if (data.portion_control) html += `<div class="field"><span class="field-label">Portion Control Experience:</span><span class="field-value">${data.portion_control}</span></div>`;
    if (data.consistency) html += `<div class="field"><span class="field-label">Maintaining Consistency:</span><span class="field-value">${data.consistency}</span></div>`;
    if (data.dietary_requirements) html += `<div class="field"><span class="field-label">Dietary Requirements Experience:</span><span class="field-value">${data.dietary_requirements}</span></div>`;
    if (data.work_preference) html += `<div class="field"><span class="field-label">Work Preference:</span><span class="field-value">${data.work_preference}</span></div>`;
    html += `</div>`;
  }

  if (data.position === 'kitchen-hand' && (data.kh_experience || data.dishwasher_comfort)) {
    html += `<div class="section"><h2>🧽 Kitchen Hand Specific</h2>`;
    if (data.kh_experience) html += `<div class="field"><span class="field-label">Kitchen Hand Experience:</span><span class="field-value">${data.kh_experience}</span></div>`;
    if (data.dishwasher_comfort) html += `<div class="field"><span class="field-label">Industrial Dishwasher Comfort:</span><span class="field-value">${data.dishwasher_comfort}</span></div>`;
    if (data.prioritize_tasks) html += `<div class="field"><span class="field-label">Task Prioritization:</span><span class="field-value">${data.prioritize_tasks}</span></div>`;
    if (data.physical_ability) html += `<div class="field"><span class="field-label">Physical Ability:</span><span class="field-value">${data.physical_ability}</span></div>`;
    if (data.end_of_night_cleaning) html += `<div class="field"><span class="field-label">End of Night Cleaning:</span><span class="field-value">${data.end_of_night_cleaning}</span></div>`;
    if (data.hygiene_safety) html += `<div class="field"><span class="field-label">Hygiene & Safety:</span><span class="field-value">${data.hygiene_safety}</span></div>`;
    if (data.supervision_preference) html += `<div class="field"><span class="field-label">Supervision Preference:</span><span class="field-value">${data.supervision_preference}</span></div>`;
    if (data.waste_sorting) html += `<div class="field"><span class="field-label">Waste Sorting Experience:</span><span class="field-value">${data.waste_sorting}</span></div>`;
    if (data.urgent_help) html += `<div class="field"><span class="field-label">Urgent Help Response:</span><span class="field-value">${data.urgent_help}</span></div>`;
    if (data.preferred_schedule) html += `<div class="field"><span class="field-label">Preferred Schedule:</span><span class="field-value">${data.preferred_schedule}</span></div>`;
    html += `</div>`;
  }

  if (data.position === 'bartender' && (data.bar_years || data.cocktails)) {
    html += `<div class="section"><h2>🍹 Bartender Specific</h2>`;
    if (data.bar_years) html += `<div class="field"><span class="field-label">Bar Experience:</span><span class="field-value">${data.bar_years}</span></div>`;
    if (data.cocktails) html += `<div class="field"><span class="field-label">Cocktail Skills:</span><span class="field-value">${data.cocktails}</span></div>`;
    if (data.intoxicated_customers) html += `<div class="field"><span class="field-label">Handling Intoxicated Customers:</span><span class="field-value">${data.intoxicated_customers}</span></div>`;
    if (data.track_orders) html += `<div class="field"><span class="field-label">Tracking Orders:</span><span class="field-value">${data.track_orders}</span></div>`;
    if (data.spillage_handling) html += `<div class="field"><span class="field-label">Spillage Handling:</span><span class="field-value">${data.spillage_handling}</span></div>`;
    if (data.upsell_drinks) html += `<div class="field"><span class="field-label">Upselling Drinks:</span><span class="field-value">${data.upsell_drinks}</span></div>`;
    if (data.work_alone) html += `<div class="field"><span class="field-label">Work Alone Comfort:</span><span class="field-value">${data.work_alone}</span></div>`;
    if (data.bar_cleanliness) html += `<div class="field"><span class="field-label">Bar Cleanliness:</span><span class="field-value">${data.bar_cleanliness}</span></div>`;
    if (data.bar_availability) html += `<div class="field"><span class="field-label">Bar Availability:</span><span class="field-value">${data.bar_availability}</span></div>`;
    html += `</div>`;
  }

  if (data.fast_paced || data.allergies) {
    html += `<div class="section"><h2>ℹ️ Additional Information</h2>`;
    if (data.fast_paced) html += `<div class="field"><span class="field-label">Fast-Paced Environment:</span><span class="field-value">${data.fast_paced}</span></div>`;
    if (data.allergies) html += `<div class="field"><span class="field-label">Allergies/Health Restrictions:</span><span class="field-value">${data.allergies}</span></div>`;
    html += `</div>`;
  }

  html += `
        <div class="footer">
          <p>This application was submitted through the Somma careers portal.</p>
          <p>© ${new Date().getFullYear()} Somma Restaurant</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return html;
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const applicationData = req.body;

    const transporter = nodemailer.createTransport(EMAIL_CONFIG);

    const mailOptions = {
      from: EMAIL_CONFIG.auth.user,
      to: 'info@somma.au, abrarshahriar360@yahoo.com', // Change to your actual Somma email
      subject: `New ${applicationData.position || 'Job'} Application - ${applicationData.full_name || applicationData.first_name + ' ' + applicationData.last_name}`,
      html: formatApplicationEmail(applicationData)
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send application',
      error: error.message 
    });
  }
}