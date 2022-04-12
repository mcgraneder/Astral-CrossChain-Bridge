import styled from "styled-components";


export const StyledTitle = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: ${(props) => props.align};
    color: White;
    padding: 5px;
    margin-bottom:  ${(props) => props.margin}px;
    font-weight: ${(props) => props.weight};
    // font-style: ${(props) => props.styleds};
    background-color: transparent;
    margin-top:  ${(props) => props.marginTop}px;

    @media(max-width: 1300px) {

      margin-top: 30px;
    }

    @media(max-width: 950px) {

        font-size: 90px;
        margin-top: 50px;
      }

          @media(max-width: 800px) {

            font-size: 75px;
      }

      @media(max-width: 800px) {

        // max-width: 430px;
        font-size: 65px;
  }

  @media(max-width: 630px) {

    // max-width: 430px;
    font-size: 58px;
}
`

export const StyledTitle3 = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: ${(props) => props.align};
    color: White;
    padding: 5px;
    margin-bottom:  ${(props) => props.margin}px;
    font-weight: ${(props) => props.weight};
    // font-style: ${(props) => props.styleds};
    background-color: transparent;
    margin-top:  ${(props) => props.marginTop}px;

    @media(max-width: 950px) {

        font-size: 40px;
      }

          @media(max-width: 800px) {

        // max-width: 650px;
        font-size: 35px;
      }

      @media(max-width: 800px) {

        // max-width: 430px;
        font-size: 30px;
  }

  @media(max-width: 630px) {

    // max-width: 430px;
    font-size: 27px;
}
`

export const StyledSubTitle = styled.div`

font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-size: ${(props) => props.size}px;
    text-align: center;
    align-items: center;
    color: #adadad;
    padding: 5px;
    margin-bottom: 20px;
    background-color: transparent;
    white-space: initial;
    width: 600px;
    margin: 0 auto;

@media(max-width: 950px) {

        font-size: 18px;
      }

          @media(max-width: 800px) {

            max-width: 430px;
            font-size: 17px;
      }

      @media(max-width: 630px) {

            max-width: 380px;
            font-size: 17px;
     }
    

`
export const Wrapper = styled.div`

    height ${(props) => props.space}px;
`;

export const Container = styled.div`


    position: absolute;
    top: 11%;
`

export const ButtonWrapper = styled.div`

    display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 30px;


    
`
export const VideoBackground = styled.video`

    width: 100vw;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    z-index: -1000;
    position: fixed;
`