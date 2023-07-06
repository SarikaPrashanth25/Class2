import React, { useState } from 'react'
import Personal from './sub/Personal'
import Address from './sub/Address'
import Edu from './sub/Edu'

// Personal Component

// Address

// Education
function Ex8(props) {
    const [user,setUser] = useState({
        name: "Prashu",
        email: "prasu@gmail.com",
        mobile: "985478921",
        address: {
            city: "Davangere",
            zip: "566004"
        },
        edu: {
            type: "Degree",
            title: "B.Sc",
            year: 2020
        }
    })
    return (
        <div>
            <h1>Props in Functional Component</h1>
            <Personal fName={user.name} fEmail={user.email} fMobile={user.mobile} />
            <Address fCity={user.address.city} fZip={user.address.zip} />
            <Edu fType={user.edu.type} fTitle={user.edu.title} fYear={user.edu.year} />
        </div>
    )
}

export default Ex8