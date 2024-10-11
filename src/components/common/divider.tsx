interface Props {
    width?: string | number;
    height?: string | number;
    position?: string;
    thickness?: number;
    borderColor?: string;
    marginBlock?: string | number;
    opacity?: number;
  }
  
const Divider = (props: Props) => {
    const {
      width,
      height,
      position,
      thickness,
      borderColor,
      marginBlock,
      opacity,
    } = props;
    const styles = {
      width: width || 0,
      height: height || 0,
      borderWidth: thickness || 2,
      borderColor: borderColor || "#D9D9D9",
      marginBlock: marginBlock || 0,
      opacity: opacity || 1,
    };
  
    return (
      <div style={styles} className={`divider ${position || "bottom"}`}></div>
    );
  };
  
  export default Divider;
  




