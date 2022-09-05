import React from 'react'

const List = ({people}) => {
  return (
    <>
        {people.map((person)=>{
            // const{id,name,image,age}=per
            return(
                <div key={person.id} className="person" >
                <img src={person.image} alt={person.name} />
                
                <div>
                    <h4>{person.name}</h4>
                    <p>{person.age} years</p>
                </div>
                </div>
            )
;

        })}
    </>
  );
};

export default List