import React from "react";
import SingleCountry from "../components/Countries/singleCountry/SingleCountry";
import UK from '../assests/CL_UnitedKingdom.jpg'
import Canada from '../assests/CL_Canada.jpg'
import Latvia from '../assests/CL_Latvia.jpg'
import Lithuania from '../assests/CL_Lithuania.jpg'
import France from '../assests/CL_France.jpg'
import Sweden from '../assests/CL_Sweden.jpg'
import Finland from '../assests/CL_Finland.jpg'
import Germany from '../assests/CL_Germany.jpg'
import Ireland from '../assests/CL_Ireland.jpg'
import Malta from '../assests/CL_Malta.jpg'
import Australia from '../assests/CL_Australia.jpg'
import America from '../assests/CL_America.jpg'
import Slovenia from '../assests/CL_Slovenia.jpg'
import Hungary from '../assests/CL_Hungary.jpg'
import Display from "../components/Countries/disPlay/Display";

const CountryList = () => {
  return (
    <div>
      <Display />


      {/* UK */}
      <SingleCountry
        img={UK}
        alt="No image"
        text="The UK is an outstanding destination for higher education
      , with over 160 universities renowned for their world-class teaching and research. Institutions 
      like Oxford and Cambridge offer diverse programs and cutting-edge research opportunities. The UK
      provides a rich cultural experience and strong industry connections, enhancing both academic and
        career prospects. With its globally recognized degrees and vibrant student life, the UK is an ideal
        place for international students seeking top-quality education and professional growth."
        title="United Kingdom"
      />


      {/* Canada */}
      <SingleCountry
        img={Canada}
        alt="No image"
        text="Canada is a top destination for higher education, recognized for its inclusive and diverse environment,
         along with a robust education system that ranks among the best globally. 
         Home to over 150 world-class universities and colleges, 
         Canada offers a wide range of programs in fields such as engineering, 
         technology, healthcare, and business. Known for its emphasis on research, innovation, 
         and hands-on learning, Canadian institutions provide students with practical skills and industry-relevant experience."
        title="Canada"
      />


        {/* LATVIA */}
      <SingleCountry
        img={Latvia}
        alt="No image"
        text="Latvia is an emerging study destination known for affordable tuition, diverse programs, and a vibrant student life. With over 50 institutions offering courses in English, Latvia excels in fields like engineering, business, and IT. Its EU location offers career opportunities across Europe, while a safe, welcoming environment and rich culture make it a great choice for international students seeking quality education at a lower cost."
        title="Latvia"
      />


      {/* Lithuania */}
      <SingleCountry
        img={Lithuania}
        alt="No image"
        text="Lithuania is gaining popularity as a study destination, offering affordable tuition fees and high-quality education. With a growing number of universities offering programs in English, it excels in fields such as technology, business, and life sciences. Lithuania’s EU membership provides access to wider career opportunities, and its safe, student-friendly environment, combined with rich cultural heritage, makes it an appealing option for international students seeking an affordable and enriching education experience."
        title="Lithuania"
      />


      {/* France */}
      <SingleCountry
        img={France}
        alt="No image"
        text="France is a premier destination for higher education, known for its prestigious institutions and rich culture. Home to numerous world-renowned universities and Grandes Écoles, France offers a wide range of programs in art, business, and engineering, often taught in English. With relatively low tuition fees for international students, it provides exceptional value for a high-quality education. The vibrant atmosphere and diverse culture enhance the student experience, making France an attractive choice for academic excellence and personal growth."
        title="France"
      />


      {/* Sweden */}
      <SingleCountry
        img={Sweden}
        alt="No image"
        text="Sweden is a leading destination for higher education, renowned for its innovative teaching and focus on sustainability. Many universities offer programs in English, particularly in engineering and technology. The country fosters inclusivity and student welfare, ensuring a vibrant lifestyle. With moderate tuition fees and numerous scholarships, it provides accessible, high-quality education for international students. Sweden's safe and progressive environment further enhances the overall experience."
        title="Sweden"
      />


      {/* Finland */}
      <SingleCountry
        img={Finland}
        alt="No image"
        text="Finland is an attractive destination for higher education, 
        known for its high-quality, research-driven institutions and innovative teaching methods. 
        With numerous programs offered in English, it excels in technology, education, and healthcare. 
        The country prioritizes student welfare, fostering a supportive environment for creativity 
        and collaboration. Tuition fees are relatively low, and various scholarships are available 
        for international students. With a commitment to sustainability, Finland provides an enriching
        experience for those seeking academic excellence."
        title="Finland"
      />


      {/* Germany */}
      <SingleCountry
        img={Germany}
        alt="No image"
        text="Germany is an ideal destination for higher education, boasting over 400 
        universities renowned for their high-quality, research-oriented programs and low or no 
        tuition fees. The country offers a wide array of courses in English and German, fostering
         both academic and practical experience. With a high quality of life, a safe environment, 
         and strong industry connections, Germany provides valuable opportunities for international
          students. The internationally respected degrees and comprehensive student support further
           enhance its appeal."
        title="Germany"
      />


      {/* Ireland */}
      <SingleCountry
        img={Ireland}
        alt="No image"
        text="Ireland is a sought-after destination for higher education, renowned for its quality institutions and rich culture. Many universities offer programs in English, particularly in technology and business. The welcoming environment and vibrant student life appeal to international students. Moderate tuition fees and scholarship opportunities enhance accessibility, while strong industry connections provide valuable career prospects. The scenic landscapes and friendly communities further enrich the overall experience."
        title="Ireland"
      />


      {/* Malta */}
      <SingleCountry
        img={Malta}
        alt="No image"
        text="Malta is an attractive destination for higher education, known for its unique blend of rich history and modern academia. With universities offering a variety of programs in English, Malta excels in fields such as hospitality, business, and health sciences. The island’s stunning Mediterranean scenery and vibrant culture provide a lively backdrop for student life. Its safe environment and welcoming atmosphere make it ideal for international students. Affordable tuition fees and scholarship options further enhance Malta’s appeal as a place to study and grow"
        title="Malta"
      />


      {/* Australia */}
      <SingleCountry
        img={Australia}
        alt="No image"
        text="Australia is a prime destination for higher education,
       featuring over 40 top-ranked universities known for their high-quality teaching and research.
        Institutions such as the University of Sydney and the University of Melbourne offer diverse
         programs and innovative research opportunities. With a welcoming environment, excellent student support, and strong industry links,
          Australia provides a rich educational experience and numerous career prospects. The country's high quality of life and multicultural 
      society further enhance its appeal to international students."
        title="Australia"
      />

      {/* USA */}
      <SingleCountry
        img={America}
        alt="No image"
        text="USA is a top choice for higher education, home to over 100 prestigious 
      universities and colleges, including renowned institutions like Columbia University and New York University (NYU).
       The city offers diverse academic programs, cutting-edge research opportunities, and strong industry connections that 
       enhance practical experience. With its vibrant cultural scene, extensive networking opportunities, and dynamic environment,
        New York provides an enriching educational experience and valuable professional prospects for students."
        title="USA"
      />


      {/* Slovenia */}
      <SingleCountry
        img={Slovenia}
        alt="No image"
        text="Slovenia is an emerging choice for higher education, celebrated for its high-quality institutions and beautiful landscapes. With a growing number of programs offered in English, it excels in fields such as environmental science, engineering, and social sciences. The country boasts a friendly atmosphere and a rich cultural heritage, making it welcoming for international students. Affordable tuition fees and various scholarship opportunities enhance accessibility. Slovenia's safe environment and vibrant student life further enrich the educational experience."
        title="Slovenia"
      />


      {/* Hungary */}
      <SingleCountry
        img={Hungary}
        alt="No image"
        text="Hungary is an appealing destination for higher education, known for its historic universities and affordable tuition. Many programs are offered in English, particularly in medicine, engineering, and social sciences. The country boasts a rich cultural heritage and vibrant urban life, creating an enriching environment for students. Various scholarships for international students enhance affordability. With a safe atmosphere and a welcoming spirit, Hungary provides a unique blend of academic excellence and cultural immersion."
        title="Hungary"
      />
      
    </div>
  );
};

export default CountryList;
