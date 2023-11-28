// PharmacyPage.js
import React, {useState} from 'react';
import Pharmacy from './Pharmacy';
import Navbar from './Navbar';
const medicinesData = [
  {
    id: 1,
    title: 'Paracetamol',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1IXEdigJiDPLm0DH9BdV9XcZNqFP1IQpwA&usqp=CAU',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 'Rs 200',
    quantity: 1
  },
  {
    id: 2,
    title: 'Bandages',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCiyX18QANZ2a3EdebIPYh1269NaxM4e7yw&usqp=CAU',
    info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 'Rs 100',
    quantity: 2
  },
  {
    id: 3,
    title: 'Cough Syrup',
    img: 'https://w7.pngwing.com/pngs/222/384/png-transparent-syrup-cough-medicine-cough-medicine-chesteze-cough-syrup-pharmaceutical-drug-dietary-supplement-medicine-thumbnail.png',
    info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 'Rs 400',
    quantity: 1
  },
  {
    id: 4,
    title: 'Amoxicillin',
    img : 'https://www.pyxuspharmaceuticals.com/wp-content/uploads/2022/12/AMOXICILLIN-SODIUM-INJECTION.png',
    info: 'Amoxicillin is a penicillin antibiotic used to treat various types of bacterial infections. It is approved to treat infections of the ear, nose, throat, skin, and urinary tract, among other infections. Amoxicillin works by killing bacteria that are causing the infection.',
    price: 'Rs 200',
    quantity: 1
  },
  {
    id: 5,
    title: 'Ibuprofen',
    img : 'https://5.imimg.com/data5/SELLER/Default/2023/7/325863554/WI/JM/SY/135658020/ibuprofen-tablets-ip-200-mg-.jpg',
    info: 'Ibuprofen can be used to treat pain and inflammation from various conditions, menstrual cramps, and fever in adults and children 6 months and older. Ibuprofen is available as an over-the-counter product (nonprescription Ibuprofen), as well as by prescription.',
    price: 'Rs 200',
    quantity: 1
  },
  {
    id: 6,
    title: 'Benzonatate',
    img : 'https://5.imimg.com/data5/SELLER/Default/2022/9/RV/NN/TO/155316928/benzonatate-capsules-1oo-mg.webp',
    info: 'Benzonatate is a generic drug used to relieve cough, which may be caused by an infection or illness like the common cold or flu. A healthcare provider may also recommend Benzonatate to relieve symptoms of cough caused by pneumonia or bronchitis. It is an antitussive medication approved for adults and children over 10 years old.',
    price: 'Rs 200',
    quantity: 1
  },
  {
    id: 7,
    title: 'Cetirizine',
    img : 'https://5.imimg.com/data5/SELLER/Default/2022/10/AQ/FL/FI/123462026/1.jpg',
    info: 'Cetirizine is an antihistamine medication used to treat allergy symptoms, such as runny nose, itchy eyes, and sneezing. It works by blocking the action of histamine, a substance produced in response to an allergen like dust or pollen. Cetirizine Hcl is typically taken as an oral tablet daily for symptoms of allergies.',
    price: 'Rs 200',
    quantity: 1
  },
  {
    id: 8,
    title: 'Sertraline',
    img : 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325632/a-packet-of-sertraline-lying-on-a-table-image-credit-https-commons-wikimedia-org-wiki-file-zoloft-50-mg-cn-jpg-2012.jpg?w=1155&h=1734',
    info: 'Sertraline is a generic prescription drug used to treat major depressive disorder and other mental health disorders. Sertraline Hcl is an antidepressant that is classified as a selective serotonin reuptake inhibitor (SSRI). It may help relieve symptoms of depression by affecting the levels and activity of serotonin in the brain.',
    price: 'Rs 200',
    quantity: 1
  },
  {
    id: 9,
    title: 'Meloxicam',
    img : 'https://5.imimg.com/data5/SELLER/Default/2022/11/MN/JV/EI/6918745/i-mel-meloxicam-tablets-15mg.jpeg',
    info: 'Meloxicam is a generic nonsteroidal anti-inflammatory drug (NSAID) used to treat pain and inflammation caused by osteoarthritis, rheumatoid arthritis, or juvenile rheumatoid arthritis. It works by blocking the production of certain substances called prostaglandins that cause pain and inflammation. Meloxicam is available as an oral capsule, tablet, and oral suspension.',
    price: 'Rs 200',
    quantity: 1
  },
];

function PharmacyPage() {
  return (
    <div className="pharmacy-page">
      <h1>Pharmacy Store</h1>
      <Navbar></Navbar>
      <div className="medicine-container">
        {medicinesData.map(medicine => (
          <Pharmacy key={medicine.id} {...medicine} />
        ))}
      </div>
    </div>
  );
}

export default PharmacyPage;

