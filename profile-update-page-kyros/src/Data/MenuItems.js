import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import GridViewIcon from '@mui/icons-material/GridView'
import MessageIcon from '@mui/icons-material/Message'
import ArticleIcon from '@mui/icons-material/Article'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
export const MenuItems = [
  {
    desc: 'Home',
    icon: HomeIcon,
  },
  {
    desc: 'Projects',
    icon: AssignmentIcon,
  },
  {
    desc: 'DashBoard',
    icon: GridViewIcon,
  },
  {
    desc: 'Messages',
    icon: MessageIcon,
  },
  {
    desc: 'Documents',
    icon: ArticleIcon,
  },
  {
    desc: 'Organisations',
    icon: CorporateFareIcon,
  },
  {
    desc: 'Settings',
    icon: SettingsIcon,
  },
]
export const ProfileFields = [
  {
    field: 'First Name',
    identifier: 'firstName',
    icon: PersonIcon,
    ref: '',
  },
  {
    field: 'Last Name',
    identifier: 'lastName',
    icon: PersonIcon,
    ref: '',
  },
  {
    field: 'Display Name',
    identifier: 'displayName',
    icon: AccountBoxIcon,
    ref: '',
  },
  {
    field: 'Email',
    identifier: 'emailId',
    icon: MailOutlineIcon,
    ref: '',
  },
  {
    field: 'Phone No(personal)',
    identifier: 'PhoneNoPersonal',
    icon: PhoneIcon,
    ref: '',
  },
  {
    field: 'Phone No(Work)',
    identifier: 'PhoneNoWork',
    icon: PhoneIcon,
    ref: '',
  },
  {
    field: 'Location',
    identifier: 'location',
    icon: LocationOnIcon,
    ref: '',
  },
]
// expor MenuItems

export const sampleProfile = {
  firstName: 'Adam ',
  lastName: 'Levine',
  displayName: 'Project Manager',
  emailId: 'adamlevine@kyro.us',
  PhoneNoPersonal: '9838362726',
  PhoneNoWork: '9838388826',
  location: 'Chicago',
}
