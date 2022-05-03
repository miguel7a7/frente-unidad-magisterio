import './btntoggle.css'

export const BtnToggle = ({ btnToggleMenu, handleBtnMenu }) => {
  return (
    <>
      <div
        className={`toggle ${btnToggleMenu && 'active'}`}
        onClick={handleBtnMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}
