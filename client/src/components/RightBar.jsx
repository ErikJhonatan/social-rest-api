import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import gift from '/gift.png'
import person1 from '/person/1.jpeg'

import { Users } from '../utils/dummyData'

function RightBar(props) {

    const [topBarOffsetWidth, setTopBarOffsetWidth] = useState(0);
  
    useEffect(() => {
      const topBar = document.querySelector(".topbar");
      setTopBarOffsetWidth(topBar.offsetHeight);
      const rightBarElement = document.querySelector(".right-bar-app");
      rightBarElement.style.height = `calc(100vh - ${topBarOffsetWidth}px)`;
    }, [topBarOffsetWidth]);


  return (
    <div className={`right-bar-app bg-base-200 ${props.className} overflow-y-auto sticky right-0`}
      style={{
        top: `${topBarOffsetWidth}px`
      }}
    >
      {/* Rightbar wrapper*/}
      <div className="p-5 shadow-md rounded-lg h-full">
        {/* birthdayContainer */}
        <div className=" mb-5">
          <div className="flex items-center gap-2 mb-4">
            <img src={gift} alt="gift" className="w-10"/>
            <h2 className="font-semibold">Cumpleaños de Pedro</h2>
          </div>
          <p className="text-gray-500">Pedro y 3 amigos más cumplen años hoy</p>
        </div>

        {/* onlineContainerList*/}
        <div className="mb-5">
          <h2 className="font-semibold">Amigos en línea</h2>
          {
            Users.map(({
              id,
              username,
              profilePicture
            }) => (
             
                <div key={id} className="flex items-center gap-2 mb-2">
                  <div className="avatar online">
                    <div className="w-10 rounded-full">
                      <img src={profilePicture} alt="person"/>
                    </div>
                  </div>
                  <h2 className="font-semibold">{username}</h2>
                </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}
RightBar.propTypes = {
  className: PropTypes.string,
}

export default RightBar