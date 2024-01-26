

import React, { useState } from 'react';
import './Message.css';
import Online from '../asssets/online.png';
import threeDot from '../asssets/threeDots.png';
import phone from '../asssets/phone.png';
import video from '../asssets/video.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import backarrow from "../asssets/backarrow.png"
import person from "../asssets/person.png"
import smile from "../asssets/smile.png"
import addImg from "../asssets/addImg.png"
import send from "../asssets/send.png"
export default function MessageChat() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThreeDotClick = () => {
    setIsModalOpen(true);
  };

  const handleMarkAsRead = () => {
    // Implement logic to mark all messages as read
    setIsModalOpen(false);
  };

  const handleDeleteMessages = () => {
    // Implement logic to delete messages
    setIsModalOpen(false);
  };

  return (
    <div className='messageCon'>
      <div className='messageHead'>
        <div className='meassageProfile'>
          <div className='Profile'>
            <img src={Online} alt='' />
          </div>
          <div className='ProfileTxt'>
            <h5 className='proTxt'>Jane Doe</h5>
            <h6>Online</h6>
          </div>
        </div>
        <div className='meassageCotant'>
          <img src={video} alt='' />
          <img src={phone} alt='' />
          <img
            src={threeDot}
            alt=''
            onClick={handleThreeDotClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal'>
          <button onClick={handleMarkAsRead} className='MarkBtn'> <FontAwesomeIcon icon={faCheck} />Mark All as Read</button>
          <button onClick={handleDeleteMessages} className='deleteBtn' > <FontAwesomeIcon icon={faTrashCan} /> Delete message</button>
        </div>
      )}

      <div className='messageChatting'>
        <div className='firstMessage messageChatting'>
          <p>Lorem Ipsum is simply </p>
        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>

      </div>
      <div className='TextMain'>
        <div>
          <img src={addImg} alt='' className='addImg' />
          <input title='Type Something' className='textInput' placeholder='|  Type Something' />
        </div>
        <div className='SENDIMG'>
          <img src={smile} alt='' />
          <img src={send} alt='' />
        </div>

      </div>
      <div className='messageCon'>
      <div className='messageHead'>
        <div className='meassageProfile'>
          <div className='Profile'>
            <img src={Online} alt='' />
          </div>
          <div className='ProfileTxt'>
            <h5 className='proTxt'>Jane Doe</h5>
            <h6>Online</h6>
          </div>
        </div>
        <div className='meassageCotant'>
          <img src={video} alt='' />
          <img src={phone} alt='' />
          <img
            src={threeDot}
            alt=''
            onClick={handleThreeDotClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal'>
          <button onClick={handleMarkAsRead} className='MarkBtn'> <FontAwesomeIcon icon={faCheck} />Mark All as Read</button>
          <button onClick={handleDeleteMessages} className='deleteBtn' > <FontAwesomeIcon icon={faTrashCan} /> Delete message</button>
        </div>
      )}

      <div className='messageChatting'>
        <div className='firstMessage messageChatting'>
          <p>Lorem Ipsum is simply </p>
        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>

      </div>
      <div className='TextMain'>
        <div>
          <img src={addImg} alt='' className='addImg' />
          <input title='Type Something' className='textInput' placeholder='|  Type Something' />
        </div>
        <div className='SENDIMG'>
          <img src={smile} alt='' />
          <img src={send} alt='' />
        </div>

      </div>
    </div > <div className='messageCon'>
      <div className='messageHead'>
        <div className='meassageProfile'>
          <div className='Profile'>
            <img src={Online} alt='' />
          </div>
          <div className='ProfileTxt'>
            <h5 className='proTxt'>Jane Doe</h5>
            <h6>Online</h6>
          </div>
        </div>
        <div className='meassageCotant'>
          <img src={video} alt='' />
          <img src={phone} alt='' />
          <img
            src={threeDot}
            alt=''
            onClick={handleThreeDotClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal'>
          <button onClick={handleMarkAsRead} className='MarkBtn'> <FontAwesomeIcon icon={faCheck} />Mark All as Read</button>
          <button onClick={handleDeleteMessages} className='deleteBtn' > <FontAwesomeIcon icon={faTrashCan} /> Delete message</button>
        </div>
      )}

      <div className='messageChatting'>
        <div className='firstMessage messageChatting'>
          <p>Lorem Ipsum is simply </p>
        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>

      </div>
      <div className='TextMain'>
        <div>
          <img src={addImg} alt='' className='addImg' />
          <input title='Type Something' className='textInput' placeholder='|  Type Something' />
        </div>
        <div className='SENDIMG'>
          <img src={smile} alt='' />
          <img src={send} alt='' />
        </div>

      </div>
    </div > <div className='messageCon'>
      <div className='messageHead'>
        <div className='meassageProfile'>
          <div className='Profile'>
            <img src={Online} alt='' />
          </div>
          <div className='ProfileTxt'>
            <h5 className='proTxt'>Jane Doe</h5>
            <h6>Online</h6>
          </div>
        </div>
        <div className='meassageCotant'>
          <img src={video} alt='' />
          <img src={phone} alt='' />
          <img
            src={threeDot}
            alt=''
            onClick={handleThreeDotClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal'>
          <button onClick={handleMarkAsRead} className='MarkBtn'> <FontAwesomeIcon icon={faCheck} />Mark All as Read</button>
          <button onClick={handleDeleteMessages} className='deleteBtn' > <FontAwesomeIcon icon={faTrashCan} /> Delete message</button>
        </div>
      )}

      <div className='messageChatting'>
        <div className='firstMessage messageChatting'>
          <p>Lorem Ipsum is simply </p>
        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>

      </div>
      <div className='TextMain'>
        <div>
          <img src={addImg} alt='' className='addImg' />
          <input title='Type Something' className='textInput' placeholder='|  Type Something' />
        </div>
        <div className='SENDIMG'>
          <img src={smile} alt='' />
          <img src={send} alt='' />
        </div>

      </div>
    </div > <div className='messageCon'>
      <div className='messageHead'>
        <div className='meassageProfile'>
          <div className='Profile'>
            <img src={Online} alt='' />
          </div>
          <div className='ProfileTxt'>
            <h5 className='proTxt'>Jane Doe</h5>
            <h6>Online</h6>
          </div>
        </div>
        <div className='meassageCotant'>
          <img src={video} alt='' />
          <img src={phone} alt='' />
          <img
            src={threeDot}
            alt=''
            onClick={handleThreeDotClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal'>
          <button onClick={handleMarkAsRead} className='MarkBtn'> <FontAwesomeIcon icon={faCheck} />Mark All as Read</button>
          <button onClick={handleDeleteMessages} className='deleteBtn' > <FontAwesomeIcon icon={faTrashCan} /> Delete message</button>
        </div>
      )}

      <div className='messageChatting'>
        <div className='firstMessage messageChatting'>
          <p>Lorem Ipsum is simply </p>
        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div className='messageOtxt' >
          <FontAwesomeIcon icon={faEllipsis} />
          <div className='loremBtn'>
            <p style={{ color: '#00AFEF' }}>Lorem Ipsum is simply </p>
            <p style={{ textAlign: 'end', color: '#9BA1AA' }} >10:30 PM </p>
          </div>

        </div>
        <div>
          <div className='ScoMessage messageChatting'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
            <p style={{ display: 'flex', flexDirection: 'row-reverse', color: '#80D7F7' }}>09:20 PM</p>
          </div>
          <img src={person} alt='' className='imgperson' />
          <img src={backarrow} alt='' className='imgtxt' />
        </div>

      </div>
      <div className='TextMain'>
        <div>
          <img src={addImg} alt='' className='addImg' />
          <input title='Type Something' className='textInput' placeholder='|  Type Something' />
        </div>
        <div className='SENDIMG'>
          <img src={smile} alt='' />
          <img src={send} alt='' />
        </div>

      </div>
    </div >
    </div >
  );
}
