export const load = ({ getClientAddress }) => {
  const ip = getClientAddress()
  console.log(ip)
  return {
    ip
  }
}