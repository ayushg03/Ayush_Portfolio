const MyLogo = (props) => {
  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 302.1 161.2"
        fill={props.color || "currentColor"}
      >
        <style type="text/css"></style>
        <g>
          <path
            className="st0"
            d="M232,92.5C232,92.5,232,92.5,232,92.5l0.1-26.9c0,0,0-0.1-0.1-0.1h-26.9c0,0-0.1,0-0.1,0.1v26.9
		c0,0,0,0.1,0.1,0.1H232z"
          />
          <path
            className="st0"
            d="M259,11.5H151v0.9c0-0.5-0.4-0.9-0.9-0.9h-25.2c-0.3,0-0.5,0.1-0.6,0.3v-0.3H43h0c-14.9,0-27,12.1-27,27v108
		h27v-108h27v108h27v-108h27v107.1c0,0.5,0.4,0.9,0.9,0.9h25.2c0.5,0,0.9-0.4,0.9-0.9v0.9h108c14.9,0,27-12.1,27-27v-81v0
		C286,23.6,274,11.5,259,11.5z M259,119.5H151v-81h108V119.5z"
          />
        </g>
      </svg>
    </>
  )
}

export default MyLogo
