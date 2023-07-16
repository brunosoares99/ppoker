type SubTitleProps = {
  subTitle: string;
}
const SubTitle = ({ subTitle }: SubTitleProps)=> {
  return(
    <h2 className="text-gray-500">{subTitle}</h2>
  )
}
export default SubTitle;