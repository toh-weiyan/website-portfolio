import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectArray: any = [
    {
      name: "Personal Portfolio - Personal",
      techStack: "Angular, Bootstrap, AWS S3",
      description: "This is the project you are seeing right now. It was made as a way of self-introduction and as a showcase for future projects",
      liveLink: "",
      githubLink: "https://github.com/toh-weiyan/website-portfolio",
      img: {
        source: "../../assets/portfolio-screenshot.png",
        alt: "Screenshot of porfolio site displaying name"
      }
    },
    {
      name: "KITA Admin - Work Project",
      techStack: "Angular, Bootstrap, Microsoft SQL, Nest, Docker",
      description: "A comprehensive business admin website that helps with product management, sales and order tracking, refunds, membership loyalty programme. The data is served from Microsoft SQL using stored procedures and displayed in a user-friendly way using data tables.",
      liveLink: "https://kita.mobile-money.com.my/",
      githubLink: "",
      img: {
        source: "../../assets/kita-ss.jpg",
        alt: "Screenshot of KITA Admin Project"
      }
    },
    {
      name: "Tracksol Merchant Web - Work Project",
      techStack: "Angular, Bootstrap, Postgre SQL, Firebase",
      description: 'Business admin website managing product, terminals and tracking sales and orders. The data is served from Postgre SQL using stored procedures and displayed in a user-friendly way using data tables. Login is <strong>xxx</strong> for both username and password.',
      liveLink: "https://tmsmerchant.web.app",
      githubLink: "",
      img: {
        source: "../../assets/tmsweb.jpg",
        alt: "Screenshot of TMS Merchant Web Project"
      }
    },
  ]

  ngOnInit(): void {
      AOS.init();
  }

}
