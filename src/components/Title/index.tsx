type TitleProps = {
  title: string;
}
const Title = ({ title }: TitleProps)=> {
  return(
    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
  )
}
export default Title;