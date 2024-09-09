import React from 'react';
import './message.css';

const MessageView = () => {
    return (
        <div className="message-container">
            <div className="message-header">
                <div>메세지 목록</div>
                <div className="message-header-content">
                    <div>메세지</div>
                    <div>등록일</div>
                    <div>확인</div>
                </div>
            </div>
            <div className="message-body">
                <p>받은 쪽지가 없습니다.</p>
            </div>
        </div>
    );
};

export default MessageView;
