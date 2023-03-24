import styled from 'styled-components'

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 25px;
  cursor: pointer;
`

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <i class='fa-brands fa-square-instagram'></i>
      <i class='fa-brands fa-facebook'></i>
      <i class='fa-brands fa-twitter'></i>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
