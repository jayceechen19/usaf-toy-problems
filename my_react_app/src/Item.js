import React from 'react'

function Item (props) {
    var people = props.list.map(person => (
        <li>
            Student ID: {person.id},
            Name: {person.name},
            Class: {person.class},
            Location: {person.location},
            Role: {person.role}
        </li>
    )) 
    
    return (
        <ul>{people}</ul>
    )
}

export default Item