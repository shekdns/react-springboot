import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";

const initState = {
  dto_list: [],
  page_num_list: [],
  page_request_dto: null,
  prev: false,
  next: false,
  total_count: 0,
  prev_page: 0,
  next_page: 0,
  total_page: 0,
  current: 0
}

const ListComponent = () => {
  const { page, size, refresh, moveToList, moveToRead } = useCustomMove()

  const [serverData, setServerData] = useState( initState )

  useEffect( () => {
    getList( {page, size} ).then( data => {
      console.log( data )
      setServerData( data )
    })
  }, [page,size, refresh])

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      <div className="flex flex-wrap mx-auto justify-center p-6">
        { Array.isArray(serverData.dto_list) && serverData.dto_list.map( todo => 
          <div key={todo.tno} className="w-full min-w-[400px] p-2 m-2 rounded shadow-md" onClick={() => moveToRead( todo.tno )}>
            <div className="flex" >
              <div className="font-extrabold text-2xl p-2 w-1/12">
                {todo.tno}
              </div>
              <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                {todo.title}
              </div>
              <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                {todo.due_date}
              </div>
            </div>
          </div>
        )}
      </div>
      <PageComponent serverData={serverData} movePage={moveToList}></PageComponent>
    </div>
  );
}

export default ListComponent;