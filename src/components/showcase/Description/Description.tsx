const Description: React.FC<{description: string}> = ({ description }): JSX.Element => {

  return (

    <>
      
      <div className="product__description">
        {description}
      </div>

    </>
    
  )

}

export default Description;