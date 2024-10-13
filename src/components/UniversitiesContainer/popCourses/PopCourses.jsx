import React from 'react'
import './popCourses.css'


function Courses() {
  return (
    <div className='popular_courses'>
      <div><h2 className='courses_title'>Popular Courses</h2></div>
      <div className='courses'>
          <div className='course_1'>
            <div><h4 className='course_name'>MBBS</h4></div>
            <div><h4 className='course_name'>Business Adminstration</h4></div>
            <div><h4 className='course_name'>Information Technology</h4></div>
            <div><h4 className='course_name'>Petroleum Engineering</h4></div>
          </div>
          <div className='course_2'>
            <div><h4  className='course_name'>Law</h4></div>
            <div><h4  className='course_name'>Architecture</h4></div>
            <div><h4  className='course_name'>Management</h4></div>
            <div><h4  className='course_name'>International Relations</h4></div>
          </div>
      </div>
    </div>
  )
}

export default Courses;
