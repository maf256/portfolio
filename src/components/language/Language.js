import styled from 'styled-components'

export default function Language ({setSelectedLanguage})  {

  
    const onChangeHandeling =  (e)=> {
        setSelectedLanguage(e.target.value)
    }
  return (
    <LanguageSelect onChange={onChangeHandeling}>
        <option value="nr">Norsk</option>
        <option value="en">English</option>
    </LanguageSelect>
  )
}




const LanguageSelect = styled.select`

`