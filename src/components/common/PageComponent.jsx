const PageComponent = ( { serverData, movePage } ) => {
  return (
    <div className="m-6 flex justify-center">
      {serverData.prev ?
        <div className="m-2 p-2 w-16 text-center font-bold text-blue-400" onClick={() => movePage( {page:serverData.prev_page} )}>
          Prev
        </div> : <></>
      }
      {serverData.page_num_list.map( page_num =>  
        <div key={page_num} 
        className={`m-2 p-2 w-12 text-center rounded shadow-md text-black ${serverData.current === page_num ? 'bg-gray-500' : 'bg-blue-400'}`}  
                   onClick={() => movePage( {page:page_num} )}>
          {page_num}
        </div>
       )}
      {serverData.next ?
        <div className="m-2 p-2 w-16 text-center font-bold text-blue-400" onClick={() => movePage( {page:serverData.next_page} )}>
          Next
        </div> : <></>  
      }
    </div>
  );
}

export default PageComponent; 