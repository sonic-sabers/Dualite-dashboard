const HeaderSection = ({ heading, subHeading, rightItem = () => { } }) => {
  return (
    <header style={{
      margin: "20px",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div>
        <h1 style={{
          fontSize: "30px",
          color: '#000',
          fontSize: '64px',
          fontWeight: 700,
        }}>{heading}</h1>
      </div>
    </header >
  );
};

export default HeaderSection;
