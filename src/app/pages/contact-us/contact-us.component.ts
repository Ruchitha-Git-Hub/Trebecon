import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from './../../../environment';
import { HostListener } from '@angular/core';

const apiUrl = environment.apiUrl;
const token = environment.bearerToken;

type FormField = 'name' | 'phonenumber' | 'email' | 'message' | 'countryCode';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  formData: Record<FormField, string> = {
    name: '',
    phonenumber: '',
    email: '',
    message: '',
    countryCode: '+1' // default
  };

  formErrors: Record<FormField, string> = {
    name: '',
    phonenumber: '',
    email: '',
    message: '',
    countryCode: ''
  };

  countryList = [
    { code: '+93', name: 'Afghanistan', flag: 'af' },
    { code: '+355', name: 'Albania', flag: 'al' },
    { code: '+213', name: 'Algeria', flag: 'dz' },
    { code: '+1684', name: 'American Samoa', flag: 'as' },
    { code: '+376', name: 'Andorra', flag: 'ad' },
    { code: '+244', name: 'Angola', flag: 'ao' },
    { code: '+1264', name: 'Anguilla', flag: 'ai' },
    { code: '+672', name: 'Antarctica', flag: 'aq' },
    { code: '+1268', name: 'Antigua and Barbuda', flag: 'ag' },
    { code: '+54', name: 'Argentina', flag: 'ar' },
    { code: '+374', name: 'Armenia', flag: 'am' },
    { code: '+297', name: 'Aruba', flag: 'aw' },
    { code: '+61', name: 'Australia', flag: 'au' },
    { code: '+43', name: 'Austria', flag: 'at' },
    { code: '+994', name: 'Azerbaijan', flag: 'az' },
    { code: '+1242', name: 'Bahamas', flag: 'bs' },
    { code: '+973', name: 'Bahrain', flag: 'bh' },
    { code: '+880', name: 'Bangladesh', flag: 'bd' },
    { code: '+1246', name: 'Barbados', flag: 'bb' },
    { code: '+375', name: 'Belarus', flag: 'by' },
    { code: '+32', name: 'Belgium', flag: 'be' },
    { code: '+501', name: 'Belize', flag: 'bz' },
    { code: '+229', name: 'Benin', flag: 'bj' },
    { code: '+1441', name: 'Bermuda', flag: 'bm' },
    { code: '+975', name: 'Bhutan', flag: 'bt' },
    { code: '+591', name: 'Bolivia', flag: 'bo' },
    { code: '+387', name: 'Bosnia and Herzegovina', flag: 'ba' },
    { code: '+267', name: 'Botswana', flag: 'bw' },
    { code: '+55', name: 'Brazil', flag: 'br' },
    { code: '+246', name: 'British Indian Ocean Territory', flag: 'io' },
    { code: '+673', name: 'Brunei', flag: 'bn' },
    { code: '+359', name: 'Bulgaria', flag: 'bg' },
    { code: '+226', name: 'Burkina Faso', flag: 'bf' },
    { code: '+257', name: 'Burundi', flag: 'bi' },
    { code: '+855', name: 'Cambodia', flag: 'kh' },
    { code: '+237', name: 'Cameroon', flag: 'cm' },
     { code: '+1', name: 'United States', flag: 'us' },
    { code: '+1', name: 'Canada', flag: 'ca' },
    { code: '+238', name: 'Cape Verde', flag: 'cv' },
    { code: '+1345', name: 'Cayman Islands', flag: 'ky' },
    { code: '+236', name: 'Central African Republic', flag: 'cf' },
    { code: '+235', name: 'Chad', flag: 'td' },
    { code: '+56', name: 'Chile', flag: 'cl' },
    { code: '+86', name: 'China', flag: 'cn' },
    { code: '+61', name: 'Christmas Island', flag: 'cx' },
    { code: '+61', name: 'Cocos Islands', flag: 'cc' },
    { code: '+57', name: 'Colombia', flag: 'co' },
    { code: '+269', name: 'Comoros', flag: 'km' },
    { code: '+242', name: 'Congo', flag: 'cg' },
    { code: '+243', name: 'Congo (DRC)', flag: 'cd' },
    { code: '+682', name: 'Cook Islands', flag: 'ck' },
    { code: '+506', name: 'Costa Rica', flag: 'cr' },
    { code: '+385', name: 'Croatia', flag: 'hr' },
    { code: '+53', name: 'Cuba', flag: 'cu' },
    { code: '+599', name: 'Curaçao', flag: 'cw' },
    { code: '+357', name: 'Cyprus', flag: 'cy' },
    { code: '+420', name: 'Czech Republic', flag: 'cz' },
    { code: '+225', name: "Côte d'Ivoire", flag: 'ci' },
    { code: '+45', name: 'Denmark', flag: 'dk' },
    { code: '+253', name: 'Djibouti', flag: 'dj' },
    { code: '+1767', name: 'Dominica', flag: 'dm' },
    { code: '+1809', name: 'Dominican Republic', flag: 'do' },
    { code: '+593', name: 'Ecuador', flag: 'ec' },
    { code: '+20', name: 'Egypt', flag: 'eg' },
    { code: '+503', name: 'El Salvador', flag: 'sv' },
    { code: '+240', name: 'Equatorial Guinea', flag: 'gq' },
    { code: '+291', name: 'Eritrea', flag: 'er' },
    { code: '+372', name: 'Estonia', flag: 'ee' },
    { code: '+268', name: 'Eswatini', flag: 'sz' },
    { code: '+251', name: 'Ethiopia', flag: 'et' },
    { code: '+500', name: 'Falkland Islands', flag: 'fk' },
    { code: '+298', name: 'Faroe Islands', flag: 'fo' },
    { code: '+679', name: 'Fiji', flag: 'fj' },
    { code: '+358', name: 'Finland', flag: 'fi' },
    { code: '+33', name: 'France', flag: 'fr' },
    { code: '+594', name: 'French Guiana', flag: 'gf' },
    { code: '+689', name: 'French Polynesia', flag: 'pf' },
    { code: '+241', name: 'Gabon', flag: 'ga' },
    { code: '+220', name: 'Gambia', flag: 'gm' },
    { code: '+995', name: 'Georgia', flag: 'ge' },
    { code: '+49', name: 'Germany', flag: 'de' },
    { code: '+233', name: 'Ghana', flag: 'gh' },
    { code: '+350', name: 'Gibraltar', flag: 'gi' },
    { code: '+30', name: 'Greece', flag: 'gr' },
    { code: '+299', name: 'Greenland', flag: 'gl' },
    { code: '+1473', name: 'Grenada', flag: 'gd' },
    { code: '+590', name: 'Guadeloupe', flag: 'gp' },
    { code: '+1671', name: 'Guam', flag: 'gu' },
    { code: '+502', name: 'Guatemala', flag: 'gt' },
    { code: '+44', name: 'Guernsey', flag: 'gg' },
    { code: '+224', name: 'Guinea', flag: 'gn' },
    { code: '+245', name: 'Guinea-Bissau', flag: 'gw' },
    { code: '+592', name: 'Guyana', flag: 'gy' },
    { code: '+509', name: 'Haiti', flag: 'ht' },
    { code: '+504', name: 'Honduras', flag: 'hn' },
    { code: '+852', name: 'Hong Kong', flag: 'hk' },
    { code: '+36', name: 'Hungary', flag: 'hu' },
    { code: '+354', name: 'Iceland', flag: 'is' },
    { code: '+91', name: 'India', flag: 'in' },
    { code: '+62', name: 'Indonesia', flag: 'id' },
    { code: '+98', name: 'Iran', flag: 'ir' },
    { code: '+964', name: 'Iraq', flag: 'iq' },
    { code: '+353', name: 'Ireland', flag: 'ie' },
    { code: '+44', name: 'Isle of Man', flag: 'im' },
    { code: '+972', name: 'Israel', flag: 'il' },
    { code: '+39', name: 'Italy', flag: 'it' },
    { code: '+1876', name: 'Jamaica', flag: 'jm' },
    { code: '+81', name: 'Japan', flag: 'jp' },
    { code: '+44', name: 'Jersey', flag: 'je' },
    { code: '+962', name: 'Jordan', flag: 'jo' },
    { code: '+7', name: 'Kazakhstan', flag: 'kz' },
    { code: '+254', name: 'Kenya', flag: 'ke' },
    { code: '+686', name: 'Kiribati', flag: 'ki' },
    { code: '+965', name: 'Kuwait', flag: 'kw' },
    { code: '+996', name: 'Kyrgyzstan', flag: 'kg' },
    { code: '+856', name: 'Laos', flag: 'la' },
    { code: '+371', name: 'Latvia', flag: 'lv' },
    { code: '+961', name: 'Lebanon', flag: 'lb' },
    { code: '+266', name: 'Lesotho', flag: 'ls' },
    { code: '+231', name: 'Liberia', flag: 'lr' },
    { code: '+218', name: 'Libya', flag: 'ly' },
    { code: '+423', name: 'Liechtenstein', flag: 'li' },
    { code: '+370', name: 'Lithuania', flag: 'lt' },
    { code: '+352', name: 'Luxembourg', flag: 'lu' },
    { code: '+853', name: 'Macao', flag: 'mo' },
    { code: '+261', name: 'Madagascar', flag: 'mg' },
    { code: '+265', name: 'Malawi', flag: 'mw' },
    { code: '+60', name: 'Malaysia', flag: 'my' },
    { code: '+960', name: 'Maldives', flag: 'mv' },
    { code: '+223', name: 'Mali', flag: 'ml' },
    { code: '+356', name: 'Malta', flag: 'mt' },
    { code: '+692', name: 'Marshall Islands', flag: 'mh' },
    { code: '+596', name: 'Martinique', flag: 'mq' },
    { code: '+222', name: 'Mauritania', flag: 'mr' },
    { code: '+230', name: 'Mauritius', flag: 'mu' },
    { code: '+262', name: 'Mayotte', flag: 'yt' },
    { code: '+52', name: 'Mexico', flag: 'mx' },
    { code: '+691', name: 'Micronesia', flag: 'fm' },
    { code: '+373', name: 'Moldova', flag: 'md' },
    { code: '+377', name: 'Monaco', flag: 'mc' },
    { code: '+976', name: 'Mongolia', flag: 'mn' },
    { code: '+382', name: 'Montenegro', flag: 'me' },
    { code: '+1664', name: 'Montserrat', flag: 'ms' },
    { code: '+212', name: 'Morocco', flag: 'ma' },
    { code: '+258', name: 'Mozambique', flag: 'mz' },
    { code: '+95', name: 'Myanmar', flag: 'mm' },
    { code: '+264', name: 'Namibia', flag: 'na' },
    { code: '+674', name: 'Nauru', flag: 'nr' },
    { code: '+977', name: 'Nepal', flag: 'np' },
    { code: '+31', name: 'Netherlands', flag: 'nl' },
    { code: '+687', name: 'New Caledonia', flag: 'nc' },
    { code: '+64', name: 'New Zealand', flag: 'nz' },
    { code: '+505', name: 'Nicaragua', flag: 'ni' },
    { code: '+227', name: 'Niger', flag: 'ne' },
    { code: '+234', name: 'Nigeria', flag: 'ng' },
    { code: '+683', name: 'Niue', flag: 'nu' },
    { code: '+672', name: 'Norfolk Island', flag: 'nf' },
    { code: '+850', name: 'North Korea', flag: 'kp' },
    { code: '+389', name: 'North Macedonia', flag: 'mk' },
    { code: '+1670', name: 'Northern Mariana Islands', flag: 'mp' },
    { code: '+47', name: 'Norway', flag: 'no' },
    { code: '+968', name: 'Oman', flag: 'om' },
    { code: '+92', name: 'Pakistan', flag: 'pk' },
    { code: '+680', name: 'Palau', flag: 'pw' },
    { code: '+970', name: 'Palestine', flag: 'ps' },
    { code: '+507', name: 'Panama', flag: 'pa' },
    { code: '+675', name: 'Papua New Guinea', flag: 'pg' },
    { code: '+595', name: 'Paraguay', flag: 'py' },
    { code: '+51', name: 'Peru', flag: 'pe' },
    { code: '+63', name: 'Philippines', flag: 'ph' },
    { code: '+48', name: 'Poland', flag: 'pl' },
    { code: '+351', name: 'Portugal', flag: 'pt' },
    { code: '+1787', name: 'Puerto Rico', flag: 'pr' },
    { code: '+974', name: 'Qatar', flag: 'qa' },
    { code: '+262', name: 'Réunion', flag: 're' },
    { code: '+40', name: 'Romania', flag: 'ro' },
    { code: '+7', name: 'Russia', flag: 'ru' },
    { code: '+250', name: 'Rwanda', flag: 'rw' },
    { code: '+590', name: 'Saint Barthélemy', flag: 'bl' },
    { code: '+290', name: 'Saint Helena', flag: 'sh' },
    { code: '+1869', name: 'Saint Kitts and Nevis', flag: 'kn' },
    { code: '+1758', name: 'Saint Lucia', flag: 'lc' },
    { code: '+590', name: 'Saint Martin', flag: 'mf' },
    { code: '+508', name: 'Saint Pierre and Miquelon', flag: 'pm' },
    { code: '+1784', name: 'Saint Vincent and the Grenadines', flag: 'vc' },
    { code: '+685', name: 'Samoa', flag: 'ws' },
    { code: '+378', name: 'San Marino', flag: 'sm' },
    { code: '+239', name: 'São Tomé and Príncipe', flag: 'st' },
    { code: '+966', name: 'Saudi Arabia', flag: 'sa' },
    { code: '+221', name: 'Senegal', flag: 'sn' },
    { code: '+381', name: 'Serbia', flag: 'rs' },
    { code: '+248', name: 'Seychelles', flag: 'sc' },
    { code: '+232', name: 'Sierra Leone', flag: 'sl' },
    { code: '+65', name: 'Singapore', flag: 'sg' },
    { code: '+1721', name: 'Sint Maarten', flag: 'sx' },
    { code: '+421', name: 'Slovakia', flag: 'sk' },
    { code: '+386', name: 'Slovenia', flag: 'si' },
    { code: '+677', name: 'Solomon Islands', flag: 'sb' },
    { code: '+252', name: 'Somalia', flag: 'so' },
    { code: '+27', name: 'South Africa', flag: 'za' },
    { code: '+82', name: 'South Korea', flag: 'kr' },
    { code: '+211', name: 'South Sudan', flag: 'ss' },
    { code: '+34', name: 'Spain', flag: 'es' },
    { code: '+94', name: 'Sri Lanka', flag: 'lk' },
    { code: '+249', name: 'Sudan', flag: 'sd' },
    { code: '+597', name: 'Suriname', flag: 'sr' },
    { code: '+47', name: 'Svalbard and Jan Mayen', flag: 'sj' },
    { code: '+46', name: 'Sweden', flag: 'se' },
    { code: '+41', name: 'Switzerland', flag: 'ch' },
    { code: '+963', name: 'Syria', flag: 'sy' },
    { code: '+886', name: 'Taiwan', flag: 'tw' },
    { code: '+992', name: 'Tajikistan', flag: 'tj' },
    { code: '+255', name: 'Tanzania', flag: 'tz' },
    { code: '+66', name: 'Thailand', flag: 'th' },
    { code: '+670', name: 'Timor-Leste', flag: 'tl' },
    { code: '+228', name: 'Togo', flag: 'tg' },
    { code: '+690', name: 'Tokelau', flag: 'tk' },
    { code: '+676', name: 'Tonga', flag: 'to' },
    { code: '+1868', name: 'Trinidad and Tobago', flag: 'tt' },
    { code: '+216', name: 'Tunisia', flag: 'tn' },
    { code: '+90', name: 'Turkey', flag: 'tr' },
    { code: '+993', name: 'Turkmenistan', flag: 'tm' },
    { code: '+1649', name: 'Turks and Caicos Islands', flag: 'tc' },
    { code: '+688', name: 'Tuvalu', flag: 'tv' },
    { code: '+971', name: 'UAE', flag: 'ae' },
    { code: '+256', name: 'Uganda', flag: 'ug' },
    { code: '+380', name: 'Ukraine', flag: 'ua' },
    { code: '+44', name: 'United Kingdom', flag: 'gb' },
    { code: '+598', name: 'Uruguay', flag: 'uy' },
    { code: '+1340', name: 'US Virgin Islands', flag: 'vi' },
    { code: '+998', name: 'Uzbekistan', flag: 'uz' },
    { code: '+678', name: 'Vanuatu', flag: 'vu' },
    { code: '+379', name: 'Vatican City', flag: 'va' },
    { code: '+58', name: 'Venezuela', flag: 've' },
    { code: '+84', name: 'Vietnam', flag: 'vn' },
    { code: '+681', name: 'Wallis and Futuna', flag: 'wf' },
    { code: '+212', name: 'Western Sahara', flag: 'eh' },
    { code: '+967', name: 'Yemen', flag: 'ye' },
    { code: '+260', name: 'Zambia', flag: 'zm' },
    { code: '+263', name: 'Zimbabwe', flag: 'zw' }
  ];

  errorMessage = '';
  formSubmitted = false;
  successMessage = '';
  isDropdownOpen = false;

  constructor(private http: HttpClient) {}

  getFlagEmoji(flag: string): string {
    // Convert 2-letter country code (e.g., 'in') to flag emoji using regional indicator symbols
    const codePoints = flag
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0)); // 127397 is the base offset for regional indicator symbols
    return String.fromCodePoint(...codePoints);
  }

  clearError(field: FormField) {
    this.formErrors[field] = '';
    if (field === 'name' && this.formData.name && !this.formData.name.match(/^[a-zA-Z\s]+$/)) {
      this.formErrors.name = 'Name must contain only letters and spaces.';
    }
    if (field === 'phonenumber') {
      const phoneStr = String(this.formData.phonenumber || '');
      if (phoneStr && !phoneStr.match(/^\d{10}$/)) {
        this.formErrors.phonenumber = 'Phone number must contain exactly 10 digits.';
      }
    }
    if (field === 'email' && this.formData.email && !this.formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.formErrors.email = 'Email is not valid.';
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCountry(country: any) {
    this.formData.countryCode = country.code;
    this.isDropdownOpen = false;
  }

  getSelectedCountryFlag(): string {
    const selectedCountry = this.countryList.find(country => country.code === this.formData.countryCode);
    return selectedCountry ? selectedCountry.flag : 'in'; // default to India
  }

  getSelectedCountryName(): string {
    const selectedCountry = this.countryList.find(country => country.code === this.formData.countryCode);
    return selectedCountry ? selectedCountry.name : 'India'; // default to India
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnClickOutside(event: any) {
    const dropdown = event.target.closest('.custom-country-dropdown');
    if (!dropdown) {
      this.isDropdownOpen = false;
    }
  }

  onSubmit() {
    let count = 0;

    if (!this.formData.name) {
      this.formErrors.name = 'Name is required.';
      count++;
    }
    if (!this.formData.phonenumber) {
      this.formErrors.phonenumber = 'Phone number is required.';
      count++;
    }
    if (!this.formData.email) {
      this.formErrors.email = 'Email is required.';
      count++;
    }
    if (!this.formData.message) {
      this.formErrors.message = 'Message is required.';
      count++;
    }

    if (this.formData.name && !this.formData.name.match(/^[a-zA-Z\s]+$/)) {
      this.formErrors.name = 'Name must contain only letters and spaces.';
      count++;
    }

    const phoneStr = String(this.formData.phonenumber || '');
    if (phoneStr && !phoneStr.match(/^\d{10}$/)) {
      this.formErrors.phonenumber = 'Phone number must contain exactly 10 digits.';
      count++;
    }

    if (this.formData.email && !this.formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.formErrors.email = 'Email is not valid.';
      count++;
    }

    if (count > 0) {
      return;
    }

    this.formSubmitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    const payload = {
      name: this.formData.name,
      phone_number: this.formData.countryCode + this.formData.phonenumber,
      email: this.formData.email,
      message: this.formData.message
    };

    const headers = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
    });
    
    this.http.post(apiUrl + '/api/contact-form/', payload, { headers }).subscribe({
      next: (response) => {
        // Reset form
        this.formData = {
          name: '',
          phonenumber: '',
          email: '',
          message: '',
          countryCode: '+91'
        };
        this.formErrors = {
          name: '',
          phonenumber: '',
          email: '',
          message: '',
          countryCode: ''
        };
        console.log('Form submitted successfully:', response);
        this.successMessage = "Contact form submitted successfully.";
        this.formSubmitted = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'There was an error sending your message. Please try again later.';
        console.error('Error submitting form:', error);
        this.formSubmitted = false;
      }
    });
  }
}