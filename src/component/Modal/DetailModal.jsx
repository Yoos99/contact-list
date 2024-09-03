import '../../css/detailModal.css';

export default function ContactDetailsModal({ contact, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>연락처 상세 정보</h2>
        <p>
          <strong>이름:</strong> {contact.name}
        </p>
        <p>
          <strong>전화번호:</strong> {contact.phoneNumber}
        </p>
        <p>
          <strong>그룹:</strong> {contact.selectedGroup}
        </p>
        <p>
          <strong>메모:</strong> {contact.memo || '없음'}
        </p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}
