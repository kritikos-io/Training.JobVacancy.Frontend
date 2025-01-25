import { Component } from '@angular/core';

@Component({
  selector: 'aa-links',
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
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
}
