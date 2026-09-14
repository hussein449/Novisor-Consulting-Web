// Clients we have built for. All are based in Lebanon.
// Logos were taken from each company's own website (New Europharm via the Internet Archive copy of its site).
import myOffice from '../assets/logos/myoffice.png'
import newEuropharm from '../assets/logos/new-europharm.png'
import novum from '../assets/logos/novum.png'
import realEstate from '../assets/logos/realestate.png'
import zarBeauty from '../assets/logos/zar-beauty.png'

export const clientCountry = 'Lebanon'

// `caseId` links to the matching project on the use cases page.
// Logos have very different proportions, so each gets its own size classes:
// `logoClass` for large placements (logo strip, project header), `barLogoClass` for the project switcher.
export const clients = [
  {
    caseId: 'myoffice',
    name: 'myOffice.lb',
    type: 'Flexible workspaces',
    logo: myOffice,
    logoClass: 'max-h-8 max-w-[168px]',
    barLogoClass: 'max-h-5 max-w-[104px]',
  },
  {
    caseId: 'realestate',
    name: 'Realestate.lb',
    type: 'Property listings platform',
    logo: realEstate,
    logoClass: 'max-h-8 max-w-[176px]',
    barLogoClass: 'max-h-5 max-w-[110px]',
  },
  {
    caseId: 'zar-beauty',
    name: 'ZAR Beauty',
    type: 'Online beauty shop',
    logo: zarBeauty,
    logoClass: 'h-[42px]',
    barLogoClass: 'h-7',
  },
  {
    caseId: 'europharm',
    name: 'New Europharm',
    type: 'Medical supplier',
    logo: newEuropharm,
    logoClass: 'max-h-16 max-w-[96px]',
    barLogoClass: 'max-h-9 max-w-[48px]',
  },
  { caseId: 'naserddine', name: 'Naserddine Electronics', type: 'Electronics', logo: null },
  {
    caseId: 'citecheck',
    name: 'Novum Research and Innovation Group',
    type: 'Research and innovation',
    logo: novum,
    logoClass: 'max-h-11 max-w-[168px]',
    barLogoClass: 'max-h-7 max-w-[100px]',
  },
]

export const clientForCase = (caseId) => clients.find((client) => client.caseId === caseId)
