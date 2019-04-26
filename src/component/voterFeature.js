import React  from 'react';



const VoteTable=(props)=>{
    return(
     <div className="voteTable">
        <h1>Vote for you favourite JS libraries</h1>
        {props.VoteItems.map((item)=>VoteItem(item.id,item.votesAmount,item.name,props.VotedAbility))}

     </div>
    )
}   
const VoteItem= (ItemId,VotesAmount, LibraryName,voteFunc)=>{
    return(
        <p className="VoteItem" key={ItemId} style={VotesAmount>9 ?{backgroundColor:"orange"}:{}}>
        <span >{VotesAmount}</span> <span className="ItemName">{LibraryName}</span> <button onClick={voteFunc.bind(this,ItemId)}>Vote</button>
        </p>
        
    )
}
export default VoteTable;