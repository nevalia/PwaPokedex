// Calculates which page should be navigated to in reverse
export const backPageCalculation = (currentPage, maxPages) => {
  if (currentPage <= 1) {
    return 1
  } else if (currentPage <= maxPages) {
    return currentPage - 1
  } else {
    return maxPages
  }
}

// Calculates which page should be navigated to going forward
export const forwardPageCalculation = (currentPage, maxPages) => {
  if (currentPage >= maxPages) {
    return maxPages
  } else if (currentPage >= 1) {
    return currentPage + 1
  } else {
    return 1
  }
}

export const capitalizeString = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getPokemonIdFromUrl = url => {
  return url.slice(34, url.length - 1)
}

export const getPokemonDescriptionFromLanguage = (language, descriptions) => {
  const filteredDescriptionArray = descriptions.filter(
    element => element.language.name === language
  )

  return filteredDescriptionArray.pop()
}

export const getPokemonGeneration = generation_string => {
  return generation_string.slice(11).toUpperCase()
}

export const getPokemonStatAbbreviation = stat => {
  switch (stat) {
    case "hp":
      return "HP"
    case "attack":
      return "AT"
    case "defense":
      return "DF"
    case "special-attack":
      return "SA"
    case "special-defense":
      return "SD"
    case "speed":
      return "SP"
    default:
      break
  }
}

export const calculatePokemonMaleRate = gender_rate => {
  return (100 / 8) * (8 - gender_rate)
}

export const calculatePokemonFemaleRate = gender_rate => {
  return (100 / 8) * gender_rate
}

export const getCookieValue = cookieName => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${cookieName}=`)
  if (parts.length === 2) return parts.pop().split(";").shift()
}
