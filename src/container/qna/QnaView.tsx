import React from 'react';
import './qna.css'

const QnaView = () => {
    return (
        <div className="qna-container">
            <div className="qna-header">
                <div>문의 목록</div>
                <div className="qna-header-content">
                    <div>내용</div>
                    <div>답변</div>
                    <div>등록일</div>
                </div>
            </div>
            <div className="qna-body">
                <p>문의 신청한 내역이 없습니다.</p>
            </div>
            <div className="qna-footer">
                <button className="qna-button">글 등록</button>
            </div>
        </div>
    );
};

export default QnaView;
