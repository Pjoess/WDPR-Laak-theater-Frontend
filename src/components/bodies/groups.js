import React from 'react';
import GroupCard from './skeletons/groupsAddSkeleton';
import useGetGroups from './useGetGroups';


function CardContainerGroups() {
    const cardData = useGetGroups();
    


  
    return (
      <>
      <div>
        <h1>Join Groups</h1>
      </div>


      <div className="container">
        {cardData.map((data) => (
          <GroupCard key={data.id} name={data.name} description={data.description} type={data.type}  />
        ))}
      </div>
      

      </>
    );
  }
  
  export default CardContainerGroups;
