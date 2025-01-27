import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aa-links',
  imports: [FontAwesomeModule],
  templateUrl: './links.component.html',
})
export class LinksComponent {
  faArrowRight = faArrowRight;
  hoveredLink: string | null = '';
  links = [
    {
      title: 'Quick Links',
      contentLinks: [
        { title: 'About', href: '#' },
        { title: 'Contact', href: '#' },
        { title: 'Pricing', href: '#' },
        { title: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Candidate',
      contentLinks: [
        { title: 'Browse Jobs', href: '#' },
        { title: 'Browse Employers', href: '#' },
        { title: 'Candidate Dashboard', href: '#' },
        { title: 'Saved Jobs', href: '#' },
      ],
    },
    {
      title: 'Employers',
      contentLinks: [
        { title: 'Post a job', href: '#' },
        { title: 'Browse Candidates', href: '#' },
        { title: 'Employers Dashboard', href: '#' },
        { title: 'Applications', href: '#' },
      ],
    },
    {
      title: 'Support',
      contentLinks: [
        { title: 'Faqs', href: '#' },
        { title: 'Privacy Policy', href: '#' },
        { title: 'Terms & Conditions', href: '#' },
      ],
    },
  ];

  onMouseEnter(contentLink: string) {
    this.hoveredLink = contentLink;
  }

  onMouseLeave() {
    this.hoveredLink = '';
  }
}
