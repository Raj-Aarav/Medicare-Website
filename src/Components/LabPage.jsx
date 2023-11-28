// LabPage.jsx
import React from 'react';
import Lab from './Lab';
import Navbar from './Navbar';

const labTestsData = [
  {
    id: 1,
    testName: 'Blood Test',
    description: 'Blood tests are common medical tests. You may have a blood test as part of a routine physical examination or because you have certain symptoms.There are many different blood tests. Some tests focus on your blood cells and platelets. ',
  },
  {
    id: 2,
    testName: 'Thyroid Analysis',
    description: 'This test is used to diagnose and help find the cause of thyroid diseases such as hyperthyroidism and hypothyroidism. to diagnose various health conditions.',
  },
  {
    id: 3,
    testName: 'X-ray',
    description: 'An x-ray examination creates images of your internal organs or bones to help diagnose conditions or injuries. A special machine emits (puts out) a small amount of ionising radiation. This radiation passes through your body and is captured on a special device to produce the image.',
  },
  {
    id: 4,
    testName: 'MRI Scan',
    description: 'Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.',
  },

  {
    id: 5,
    testName: 'Endoscopy',
    description: ' The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ.',
  },

  {
    id: 6,
    testName: 'CT Scan',
    description: ' A computed tomography scan is a medical imaging technique used to obtain detailed internal images of the body. The personnel that perform CT scans are called radiographers or radiology technologists.',
  },

  {
    id: 7,
    testName: 'ElectroCardioGram',
    description: 'An electrocardiogram (EKG) test is a simple, painless, and quick test that records your heart\'s electrical activity. Each time your heart beats, an electrical signal travels through your heart. The signal triggers your heart\'s four chambers to contract (squeeze) in the proper rhythm so that your heart can pump blood to your body.',
  },

  {
    id: 8,
    testName: 'Ultrasound',
    description: 'An ultrasound is an imaging test that uses sound waves to make pictures of organs, tissues, and other structures inside your body. It allows your health care provider to see into your body without surgery.',
  },

  {
    id: 9,
    testName: 'Vision Screening',
    description: 'A vision screening is a brief test that mainly checks how well you can see things up close and far away. It\'s also called an eye test. The test usually involves reading letters on an eye chart. A vision screening is a quick way to find out if you need a comprehensive (complete) eye exam. A complete exam checks both your vision and eye health.',
  },
];

function LabPage() {
  return (
    <div className="lab-page">
      <h1>Lab Test</h1>
      <Navbar />
      <div className="lab-container">
        {labTestsData.map(test => (
          <Lab key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
}

export default LabPage;
