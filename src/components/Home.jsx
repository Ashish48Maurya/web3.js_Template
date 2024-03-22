import React, { useEffect } from 'react';
export default function Home({ address, state }) {
  const { contract } = state;

  

  const callContractFunction = async () => {
    try {
      // const transaction = await contract.registerComplaint("145");
      // await transaction.wait();


      // const transaction = await contract.getAllComplaints();
      // console.log(transaction);

      // const transaction = await contract.getUnresolvedComplaints();
      // console.log(transaction);


      // const transaction = await contract.resolveComplaint("145");
      // console.log(transaction);
     

      // const transaction = await contract.getUnresolvedComplaints();
      // console.log(transaction);


      // const transaction = await contract.getResolvedComplaints();
      // console.log(transaction);

    } catch (error) {
      console.error('Error calling contract function:', error);
    }
  };

  return (
    <>
      <div>Home</div>
      <h1>Address: {address}</h1>
      <button onClick={callContractFunction}>CallFunc</button>
    </>
  );
}
