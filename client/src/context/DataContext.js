"use client";
import React, { createContext, useContext,useEffect, useState } from "react";
import axios from "axios";

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {

  const [name, setName] = useState('');
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [myReports, setMyreports] = useState([]);
  const [cabinRoomList, setcabinRoomList] = useState([]);
  const [wardRoomList, setwardRoomList] = useState([]);
  // Fetching Doctor Info
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/alldoctor`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setDoctorInfo(response.data.data); // Assuming response.data contains the doctor info array
        } else {
          console.error('Failed to fetch doctors');
        }
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctors(); // Call the function inside useEffect
  }, []);


  // fetching my Appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/myappointment`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setAppointments(response.data.data); // Assuming response.data contains the appointment info array
        } else {
          console.error('Failed to fetch appointments');
        }
      } catch (error) {
        console.error('Error fetching appointment data:', error);
       
      }
    };

    fetchAppointments(); // Call the function inside useEffect
  }, []);
  // console.log(appointments);
  

  // fetching my Reports
  useEffect(() => {
    const fetchMyreports = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/mytestreport`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setMyreports(response.data.data); // Assuming response.data contains the appointment info array
        } else {
          console.error('Failed to fetch Reports');
        }
      } catch (error) {
        console.error('Error fetching appointment data:', error);
       
      }
    };

    fetchMyreports(); // Call the function inside useEffect
  }, []);
   console.log(myReports);
  

// fetch all cabin

   useEffect(() => {
    const fetchcabinRoomList = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/allcabin`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setcabinRoomList(response.data.data); // Assuming response.data contains the doctor info array
        } else {
          console.error('Failed to fetch wardRoomList');
        }
      } catch (error) {
        console.error('Error fetching wardRoomList data:', error);
      }
    };

    fetchcabinRoomList(); // Call the function inside useEffect
  }, []);


// fetch all ward
   useEffect(() => {
    const fetchwardRoomList = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/allward`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setwardRoomList(response.data.data); // Assuming response.data contains the doctor info array
        } else {
          console.error('Failed to fetch wardRoomList');
        }
      } catch (error) {
        console.error('Error fetching wardRoomList data:', error);
      }
    };

    fetchwardRoomList(); // Call the function inside useEffect
  }, []);

 


 
 
  
  const availableTest = [
    {
      name: "Blood test",
      amount: "300 tk",
      time: "07:30 PM",
    },
    {
      name: "X-ray",
      amount: "500 tk",
      time: "08:00 AM",
    },
    {
      name: "MRI Scan",
      amount: "3000 tk",
      time: "10:30 AM",
    },
    {
      name: "CT Scan",
      amount: "4000 tk",
      time: "11:00 AM",
    },
    {
      name: "Urine test",
      amount: "200 tk",
      time: "09:00 AM",
    },
    {
      name: "ECG",
      amount: "1500 tk",
      time: "02:00 PM",
    },
    {
      name: "Cholesterol test",
      amount: "600 tk",
      time: "03:00 PM",
    },
    {
      name: "Blood Sugar test",
      amount: "350 tk",
      time: "08:45 AM",
    },
    {
      name: "Liver Function test",
      amount: "1200 tk",
      time: "12:00 PM",
    },
    {
      name: "Kidney Function test",
      amount: "1000 tk",
      time: "01:30 PM",
    },
    {
      name: "HIV test",
      amount: "1800 tk",
      time: "04:00 PM",
    },
    {
      name: "Thyroid Function test",
      amount: "900 tk",
      time: "10:00 AM",
    },
    {
      name: "Pregnancy test",
      amount: "300 tk",
      time: "09:15 AM",
    },
    {
      name: "Vitamin D test",
      amount: "700 tk",
      time: "01:00 PM",
    },
    {
      name: "Complete Blood Count",
      amount: "500 tk",
      time: "02:45 PM",
    },
    {
      name: "Urine Culture test",
      amount: "600 tk",
      time: "03:30 PM",
    },
    {
      name: "Lipid Profile test",
      amount: "1200 tk",
      time: "11:30 AM",
    },
    {
      name: "Hemoglobin test",
      amount: "300 tk",
      time: "07:00 PM",
    },
    {
      name: "Allergy test",
      amount: "2500 tk",
      time: "05:00 PM",
    },
    {
      name: "Bone Density test",
      amount: "2000 tk",
      time: "06:00 PM",
    },
  ];

  const ambulanceList = [
    {
      driverName: "Md. Karim Rahman",
      number: "+880 1777266489",
      dutyTime: "06:00 PM",
    },
    {
      driverName: "Ali Hossain",
      number: "+880 1882365479",
      dutyTime: "08:00 AM",
    },
    {
      driverName: "Shahidul Islam",
      number: "+880 1765432178",
      dutyTime: "07:30 AM",
    },
    {
      driverName: "Rahim Uddin",
      number: "+880 1953467281",
      dutyTime: "09:00 AM",
    },
    {
      driverName: "Mahmud Khan",
      number: "+880 1938475629",
      dutyTime: "12:00 PM",
    },
    {
      driverName: "Hasan Ahmed",
      number: "+880 1734598273",
      dutyTime: "02:00 PM",
    },
    {
      driverName: "Farid Hossain",
      number: "+880 1793847564",
      dutyTime: "04:00 PM",
    },
    {
      driverName: "Sohail Khan",
      number: "+880 1612349876",
      dutyTime: "06:30 PM",
    },
    {
      driverName: "Azizur Rahman",
      number: "+880 1993765432",
      dutyTime: "08:30 PM",
    },
    {
      driverName: "Mamun Kabir",
      number: "+880 1718273645",
      dutyTime: "10:00 PM",
    },
    {
      driverName: "Bashir Hossain",
      number: "+880 1647823659",
      dutyTime: "07:00 AM",
    },
    {
      driverName: "Jamal Uddin",
      number: "+880 1758493726",
      dutyTime: "11:00 AM",
    },
    {
      driverName: "Faisal Ahmed",
      number: "+880 1918273645",
      dutyTime: "01:00 PM",
    },
    {
      driverName: "Salman Rahman",
      number: "+880 1612376458",
      dutyTime: "03:00 PM",
    },
    {
      driverName: "Kamal Hossain",
      number: "+880 1778265347",
      dutyTime: "05:00 PM",
    },
    {
      driverName: "Rafiq Ali",
      number: "+880 1789654321",
      dutyTime: "09:30 PM",
    },
    {
      driverName: "Nazim Uddin",
      number: "+880 1963748592",
      dutyTime: "11:00 PM",
    },
    {
      driverName: "Tariq Islam",
      number: "+880 1865473821",
      dutyTime: "05:30 AM",
    },
    {
      driverName: "Mustafizur Rahman",
      number: "+880 1876543219",
      dutyTime: "06:00 AM",
    },
    {
      driverName: "Nasir Hossain",
      number: "+880 1756348279",
      dutyTime: "08:30 AM",
    },
  ];
  const emergencyContactList = [
    {
      name: "Dr. Provash Roy",
      dept: "Urology",
      number: "+880 1883266503",
      dutyTime: "08:30 AM",
    },
    {
      name: "Dr. Farzana Akhter",
      dept: "Cardiology",
      number: "+880 1718266479",
      dutyTime: "10:00 AM",
    },
    {
      name: "Dr. Shakil Ahmed",
      dept: "Orthopedics",
      number: "+880 1623476523",
      dutyTime: "09:00 AM",
    },
    {
      name: "Dr. Nazrul Islam",
      dept: "Neurology",
      number: "+880 1736471823",
      dutyTime: "11:00 AM",
    },
    {
      name: "Dr. Mahfuz Alam",
      dept: "Dermatology",
      number: "+880 1853467281",
      dutyTime: "12:30 PM",
    },
    {
      name: "Dr. Sabrina Hossain",
      dept: "Pediatrics",
      number: "+880 1783947561",
      dutyTime: "01:00 PM",
    },
    {
      name: "Dr. Tanvir Khan",
      dept: "Gastroenterology",
      number: "+880 1938475629",
      dutyTime: "02:30 PM",
    },
    {
      name: "Dr. Farid Ahmed",
      dept: "Pulmonology",
      number: "+880 1678938475",
      dutyTime: "03:00 PM",
    },
    {
      name: "Dr. Samira Khan",
      dept: "ENT",
      number: "+880 1765432178",
      dutyTime: "08:00 AM",
    },
    {
      name: "Dr. Kamal Uddin",
      dept: "Nephrology",
      number: "+880 1645379826",
      dutyTime: "04:00 PM",
    },
    {
      name: "Dr. Rubel Sarker",
      dept: "Oncology",
      number: "+880 1912376458",
      dutyTime: "09:30 AM",
    },
    {
      name: "Dr. Monira Begum",
      dept: "Gynecology",
      number: "+880 1857493629",
      dutyTime: "02:00 PM",
    },
    {
      name: "Dr. Taufiq Rahman",
      dept: "Ophthalmology",
      number: "+880 1965847321",
      dutyTime: "10:30 AM",
    },
    {
      name: "Dr. Aminul Islam",
      dept: "Cardiology",
      number: "+880 1987654321",
      dutyTime: "03:30 PM",
    },
    {
      name: "Dr. Jamil Hassan",
      dept: "Neurology",
      number: "+880 1648273659",
      dutyTime: "04:30 PM",
    },
    {
      name: "Dr. Sharmin Akhter",
      dept: "Pediatrics",
      number: "+880 1749827364",
      dutyTime: "06:00 PM",
    },
    {
      name: "Dr. Omar Faruq",
      dept: "Dermatology",
      number: "+880 1687425369",
      dutyTime: "07:00 PM",
    },
    {
      name: "Dr. Hasan Mahmud",
      dept: "Urology",
      number: "+880 1789374628",
      dutyTime: "08:00 PM",
    },
    {
      name: "Dr. Nusrat Jahan",
      dept: "Orthopedics",
      number: "+880 1674382719",
      dutyTime: "09:00 PM",
    },
    {
      name: "Dr. Fahim Rahman",
      dept: "Gastroenterology",
      number: "+880 1938471628",
      dutyTime: "10:00 PM",
    },
  ];
  const nurseInfo = [
    {
      name: "Mrs. Rokeya Hosssem",
      gender: "Female",
      allocation: "R-504C",
      address: "DakhainKhan, Airport, Dhaka",
      number: "+880 135790378",
    },
    {
      name: "Mr. Jamal Uddin",
      gender: "Male",
      allocation: "R-302A",
      address: "Bashundhara, Dhaka",
      number: "+880 1728346578",
    },
    {
      name: "Ms. Sharmin Akter",
      gender: "Female",
      allocation: "R-210B",
      address: "Mohammadpur, Dhaka",
      number: "+880 1672384927",
    },
    {
      name: "Mr. Habib Rahman",
      gender: "Male",
      allocation: "R-102D",
      address: "Banani, Dhaka",
      number: "+880 1827364859",
    },
    {
      name: "Mrs. Ayesha Siddiqua",
      gender: "Female",
      allocation: "R-403B",
      address: "Gulshan, Dhaka",
      number: "+880 1738294657",
    },
    {
      name: "Mr. Asaduzzaman",
      gender: "Male",
      allocation: "R-301C",
      address: "Mirpur, Dhaka",
      number: "+880 1627483921",
    },
    {
      name: "Ms. Nusrat Jahan",
      gender: "Female",
      allocation: "R-504A",
      address: "Dhanmondi, Dhaka",
      number: "+880 1982734658",
    },
    {
      name: "Mr. Firoz Ahmed",
      gender: "Male",
      allocation: "R-206D",
      address: "Uttara, Dhaka",
      number: "+880 1792847563",
    },
    {
      name: "Mrs. Rahima Khatun",
      gender: "Female",
      allocation: "R-305B",
      address: "Savar, Dhaka",
      number: "+880 1847362849",
    },
    {
      name: "Mr. Shahin Alam",
      gender: "Male",
      allocation: "R-102B",
      address: "Malibagh, Dhaka",
      number: "+880 1638492751",
    },
    {
      name: "Ms. Mahbuba Begum",
      gender: "Female",
      allocation: "R-202A",
      address: "Tejgaon, Dhaka",
      number: "+880 1928374650",
    },
    {
      name: "Mr. Kamrul Islam",
      gender: "Male",
      allocation: "R-208C",
      address: "Khilgaon, Dhaka",
      number: "+880 1762483927",
    },
    {
      name: "Mrs. Bilkis Banu",
      gender: "Female",
      allocation: "R-307A",
      address: "Rampura, Dhaka",
      number: "+880 1728394856",
    },
    {
      name: "Mr. Taufiq Rahman",
      gender: "Male",
      allocation: "R-405D",
      address: "Baridhara, Dhaka",
      number: "+880 1837462839",
    },
    {
      name: "Ms. Fatema Akter",
      gender: "Female",
      allocation: "R-209B",
      address: "Shantinagar, Dhaka",
      number: "+880 1657392846",
    },
    {
      name: "Mr. Moin Uddin",
      gender: "Male",
      allocation: "R-506A",
      address: "Agargaon, Dhaka",
      number: "+880 1827364859",
    },
    {
      name: "Mrs. Asma Khatun",
      gender: "Female",
      allocation: "R-306C",
      address: "Lalmatia, Dhaka",
      number: "+880 1728394857",
    },
    {
      name: "Mr. Mahbubur Rahman",
      gender: "Male",
      allocation: "R-408B",
      address: "Farmgate, Dhaka",
      number: "+880 1638471928",
    },
    {
      name: "Ms. Rehana Siddique",
      gender: "Female",
      allocation: "R-309D",
      address: "Jatrabari, Dhaka",
      number: "+880 1783927462",
    },
    {
      name: "Mr. Aminul Islam",
      gender: "Male",
      allocation: "R-407A",
      address: "Shahbagh, Dhaka",
      number: "+880 1827364957",
    },
  ];
  const myBillList = [
    {
      bill_ID: "5132",
      date: "07 Apr 2024",
      amount: "5000 tk",
      description: "Appendice operation done",
      payment_Status: "Paid",
      method: "Card",
    },
    {
      bill_ID: "5133",
      date: "08 Apr 2024",
      amount: "3000 tk",
      description: "General checkup",
      payment_Status: "Unpaid",
      method: "Cash",
    },
    {
      bill_ID: "5134",
      date: "09 Apr 2024",
      amount: "12000 tk",
      description: "Heart surgery",
      payment_Status: "Paid",
      method: "Bank",
    },
    {
      bill_ID: "5135",
      date: "10 Apr 2024",
      amount: "7500 tk",
      description: "Orthopedic treatment",
      payment_Status: "Unpaid",
      method: "Nagad",
    },
    {
      bill_ID: "5136",
      date: "11 Apr 2024",
      amount: "4000 tk",
      description: "Maternity care",
      payment_Status: "Paid",
      method: "Baksh",
    },
    {
      bill_ID: "5137",
      date: "12 Apr 2024",
      amount: "6800 tk",
      description: "Neurology consultation",
      payment_Status: "Unpaid",
      method: "Rocket",
    },
    {
      bill_ID: "5138",
      date: "13 Apr 2024",
      amount: "8500 tk",
      description: "Kidney dialysis",
      payment_Status: "Paid",
      method: "Nagad",
    },
    {
      bill_ID: "5139",
      date: "14 Apr 2024",
      amount: "3500 tk",
      description: "Pediatric consultation",
      payment_Status: "Paid",
      method: "Card",
    },
    {
      bill_ID: "5140",
      date: "15 Apr 2024",
      amount: "6000 tk",
      description: "ENT surgery",
      payment_Status: "Unpaid",
      method: "Cash",
    },
    {
      bill_ID: "5141",
      date: "16 Apr 2024",
      amount: "9200 tk",
      description: "Dental care",
      payment_Status: "Paid",
      method: "Bank",
    },
    {
      bill_ID: "5142",
      date: "17 Apr 2024",
      amount: "7800 tk",
      description: "Liver surgery",
      payment_Status: "Unpaid",
      method: "Baksh",
    },
    {
      bill_ID: "5143",
      date: "18 Apr 2024",
      amount: "4300 tk",
      description: "Dermatology consultation",
      payment_Status: "Paid",
      method: "Rocket",
    },
    {
      bill_ID: "5144",
      date: "19 Apr 2024",
      amount: "5200 tk",
      description: "Eye surgery",
      payment_Status: "Unpaid",
      method: "Nagad",
    },
    {
      bill_ID: "5145",
      date: "20 Apr 2024",
      amount: "9700 tk",
      description: "Gynecology consultation",
      payment_Status: "Paid",
      method: "Card",
    },
    {
      bill_ID: "5146",
      date: "21 Apr 2024",
      amount: "6400 tk",
      description: "Urology treatment",
      payment_Status: "Unpaid",
      method: "Baksh",
    },
    {
      bill_ID: "5147",
      date: "22 Apr 2024",
      amount: "7800 tk",
      description: "Oncology treatment",
      payment_Status: "Paid",
      method: "Bank",
    },
    {
      bill_ID: "5148",
      date: "23 Apr 2024",
      amount: "3000 tk",
      description: "General checkup",
      payment_Status: "Paid",
      method: "Cash",
    },
    {
      bill_ID: "5149",
      date: "24 Apr 2024",
      amount: "4900 tk",
      description: "Cardiology consultation",
      payment_Status: "Unpaid",
      method: "Rocket",
    },
    {
      bill_ID: "5150",
      date: "25 Apr 2024",
      amount: "5600 tk",
      description: "Orthopedic surgery",
      payment_Status: "Paid",
      method: "Nagad",
    },
    {
      bill_ID: "5151",
      date: "26 Apr 2024",
      amount: "4200 tk",
      description: "Pulmonology consultation",
      payment_Status: "Unpaid",
      method: "Card",
    },
  ];
  const myPreviousHistory = [
    {
      date: "12 Jan 2023",
      treatment: "Knee Replacement",
      doctor: "Dr. Alice Johnson",
      previous_medicine: "Ibuprofen, Tramadol",
      case_summary: "Successful surgery, requires physical therapy.",
    },
    {
      date: "05 Feb 2023",
      treatment: "Appendectomy",
      doctor: "Dr. Mark Smith",
      previous_medicine: "Ciprofloxacin, Painkillers",
      case_summary: "Removed inflamed appendix, follow-up needed in 2 weeks.",
    },
    {
      date: "14 Mar 2023",
      treatment: "Cataract Surgery",
      doctor: "Dr. Maria Sanchez",
      previous_medicine: "Prednisolone, Timolol",
      case_summary: "Vision improved, continue eye drops for 4 weeks.",
    },
    {
      date: "20 Apr 2023",
      treatment: "Hip Replacement",
      doctor: "Dr. Robert Brown",
      previous_medicine: "Gabapentin, Naproxen",
      case_summary: "Patient should avoid heavy lifting for 6 weeks.",
    },
    {
      date: "10 May 2023",
      treatment: "Gallbladder Removal",
      doctor: "Dr. Sarah Lee",
      previous_medicine: "Antibiotics, Painkillers",
      case_summary: "No complications, follow a low-fat diet.",
    },
    {
      date: "18 Jun 2023",
      treatment: "Fractured Arm",
      doctor: "Dr. David Wong",
      previous_medicine: "Acetaminophen, Ibuprofen",
      case_summary: "Arm casted, return in 6 weeks for evaluation.",
    },
    {
      date: "02 Jul 2023",
      treatment: "Asthma Attack",
      doctor: "Dr. Emily Davis",
      previous_medicine: "Salbutamol, Fluticasone",
      case_summary: "Respiratory function stabilized, continue inhaler.",
    },
    {
      date: "15 Aug 2023",
      treatment: "Kidney Stones",
      doctor: "Dr. John Carter",
      previous_medicine: "Tamsulosin, Painkillers",
      case_summary: "Stones passed, increase water intake to prevent recurrence.",
    },
    {
      date: "22 Sep 2023",
      treatment: "Migraine",
      doctor: "Dr. Paul Anderson",
      previous_medicine: "Sumatriptan, Naproxen",
      case_summary: "Symptom relief, avoid bright lights and stress.",
    },
    {
      date: "30 Sep 2023",
      treatment: "Anemia",
      doctor: "Dr. Olivia Hernandez",
      previous_medicine: "Iron supplements, Vitamin C",
      case_summary: "Dietary changes recommended, recheck blood levels in 3 months.",
    },
    {
      date: "05 Oct 2023",
      treatment: "Pneumonia",
      doctor: "Dr. Charles Nguyen",
      previous_medicine: "Amoxicillin, Paracetamol",
      case_summary: "Lung infection cleared, rest advised for 2 weeks.",
    },
    {
      date: "18 Oct 2023",
      treatment: "Skin Rash",
      doctor: "Dr. Sophia Martinez",
      previous_medicine: "Hydrocortisone cream, Antihistamines",
      case_summary: "Skin reaction reduced, avoid allergens.",
    },
    {
      date: "25 Oct 2023",
      treatment: "Diabetes Type 2",
      doctor: "Dr. William Wilson",
      previous_medicine: "Metformin, Insulin",
      case_summary: "Blood sugar stable, maintain regular monitoring.",
    },
    {
      date: "01 Nov 2023",
      treatment: "Hypertension",
      doctor: "Dr. Amanda Patel",
      previous_medicine: "Amlodipine, Losartan",
      case_summary: "Blood pressure controlled, monitor regularly.",
    },
    {
      date: "12 Dec 2023",
      treatment: "ACL Reconstruction",
      doctor: "Dr. Michael Clark",
      previous_medicine: "Oxycodone, Ibuprofen",
      case_summary: "Knee brace required for 8 weeks, begin physical therapy.",
    },
    {
      date: "20 Dec 2023",
      treatment: "Severe Allergic Reaction",
      doctor: "Dr. Nancy Thomas",
      previous_medicine: "Epinephrine, Antihistamines",
      case_summary: "Patient stabilized, avoid exposure to allergens.",
    },
    {
      date: "03 Jan 2024",
      treatment: "Bronchitis",
      doctor: "Dr. George White",
      previous_medicine: "Azithromycin, Cough Syrup",
      case_summary: "Infection cleared, no further complications.",
    },
    {
      date: "16 Jan 2024",
      treatment: "Sinusitis",
      doctor: "Dr. Hannah Harris",
      previous_medicine: "Fluticasone, Amoxicillin",
      case_summary: "Nasal congestion relieved, avoid cold environments.",
    },
    {
      date: "01 Feb 2024",
      treatment: "Back Pain",
      doctor: "Dr. Jason Taylor",
      previous_medicine: "Ibuprofen, Muscle Relaxants",
      case_summary: "Pain reduced, physical therapy recommended.",
    },
    {
      date: "18 Feb 2024",
      treatment: "Tonsillectomy",
      doctor: "Dr. Katherine Scott",
      previous_medicine: "Painkillers, Antibiotics",
      case_summary: "Post-surgery recovery successful, avoid spicy foods.",
    }
  ];
  

  return (
    <DataContext.Provider
      value={{
        appointments,
        doctorInfo,
        myReports,
        cabinRoomList,
        wardRoomList,
        availableTest,
        ambulanceList,
        emergencyContactList,
        nurseInfo,
        myBillList,
        myPreviousHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for consuming the data context
export const useDataContext = () => {
  return useContext(DataContext);
};
