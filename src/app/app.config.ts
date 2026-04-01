import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { WebDevelopersComponent } from './pages/web-developers/web-developers.component';
import { PythonDevelopersComponent } from './pages/python-developers/python-developers.component';
import { MobileDevelopersComponent } from './pages/mobile-developers/mobile-developers.component';
import { UIUXDevelopersComponent } from './pages/ui-ux-developers/ui-ux-developers.component';
import { AutomationTesterComponent } from './pages/automation-tester/automation-tester.component';
import { CloudEngineersComponent } from './pages/cloud-engineers/cloud-engineers.component';
// import { EmployeePortalComponent } from './pages/employee-portal/employee-portal.component';
import { ClientPortalComponent } from './pages/client-portal/client-portal.component';
import { NewsEventsComponent } from './pages/news-events/news-events.component'; 
import { SoftwareDevelopmentServicesComponent } from './pages/services/software-development-services/software-development-services.component';
import { ItStaffingServicesComponent } from './pages/services/it-staffing-services/it-staffing-services.component';
import { TechnologyServicesComponent } from './pages/services/technology-services/technology-services.component';

import { InsuranceComponent } from './pages/industries/insurance/insurance.component';
import { FinanceComponent } from './pages/industries/finance/finance.component';
import { RetailComponent } from './pages/industries/retail/retail.component';
import { HealthCareComponent } from './pages/industries/health-care/health-care.component';
import { EnergyUtilitiesComponent } from './pages/industries/energy-utilities/energy-utilities.component';
import { TelecommunicationsComponent } from './pages/industries/telecommunications/telecommunications.component';
import { PublicSectorComponent } from './pages/industries/public-sector/public-sector.component';

import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

import { WebTechnologiesComponent } from './pages/technologies/web-technologies/web-technologies.component';
import { CloudPlatformsComponent } from './pages/technologies/cloud-platforms/cloud-platforms.component';
import { DataAnalyticsComponent } from './pages/technologies/data-analytics/data-analytics.component';
import { AiMlFrameworksComponent } from './pages/technologies/ai-ml-frameworks/ai-ml-frameworks.component';
import { CybersecurityToolsComponent } from './pages/technologies/cybersecurity-tools/cybersecurity-tools.component';
import { ErpPlatformsComponent } from './pages/technologies/erp-platforms/erp-platforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter([
			{ path: '', component: HomeComponent },
			{ path: 'about', component: AboutComponent }, 
			{ path: 'careers', component: CareersComponent },
			{ path: 'web-developers', component: WebDevelopersComponent },
			{ path: 'python-developers', component: PythonDevelopersComponent },
			{ path: 'mobile-developers', component: MobileDevelopersComponent },
			{ path: 'ui-ux-developers', component: UIUXDevelopersComponent },
			{ path: 'automation-tester', component: AutomationTesterComponent },
			{ path: 'cloud-engineers', component: CloudEngineersComponent },
			// { path: 'employee-portal', component: EmployeePortalComponent },
			{ path: 'client-portal', component: ClientPortalComponent },
			{ path: 'news-events', component: NewsEventsComponent },

			{ path: 'software-development-services', component: SoftwareDevelopmentServicesComponent },
			{ path: 'it-staffing-services', component: ItStaffingServicesComponent },
			{ path: 'technology-services', component: TechnologyServicesComponent },

			{ path: 'insurance', component: InsuranceComponent },
			{ path: 'finance', component: FinanceComponent },
			{ path: 'retail', component: RetailComponent },
			{ path: 'health-care', component: HealthCareComponent },
			{ path: 'energy-utilities', component: EnergyUtilitiesComponent },
			{ path: 'telecommunications', component: TelecommunicationsComponent },
			{ path: 'public-sector', component: PublicSectorComponent },

			{ path: 'privacy-policy', component: PrivacyPolicyComponent },
			{ path: 'terms-and-conditions', component: TermsAndConditionsComponent },
			{ path: 'contact-us', component: ContactUsComponent }, 
			
			{ path: 'web-technologies', component: WebTechnologiesComponent },
			{ path: 'cloud-platforms', component: CloudPlatformsComponent },
			{ path: 'data-analytics', component: DataAnalyticsComponent },
			{ path: 'ai-ml-frameworks', component: AiMlFrameworksComponent },
			{ path: 'cybersecurity-tools', component: CybersecurityToolsComponent },
			{ path: 'erp-platforms', component: ErpPlatformsComponent },
			 
			{ path: '**', redirectTo: '' }
		]),
		importProvidersFrom(
			FormsModule,
			ReactiveFormsModule,
			HttpClientModule,
			
			BrowserAnimationsModule
			 
		), provideAnimationsAsync(), provideAnimationsAsync(),
	]
};
