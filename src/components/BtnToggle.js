import "./btntoggle.css"

export const BtnToggle = ({ btnToggleMenu, setBtnToggleMenu }) => {
  const handleBtnMenu = () => {
    setBtnToggleMenu((btn) => !btn)
  }

  return (
    <>
      <div
        className={`toggle ${btnToggleMenu && "active"}`}
        onClick={handleBtnMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}
