import Image from 'next/image';
import { useContext } from 'react';

import Section from '@/components/Section/Section';
import LeftPanel from '@/layouts/LeftPanel';

import { GitUserContext } from '../contexts/GitUserContext/GitUserContext';
import Page from '../layouts/Page';

type ProfileType = {};

type Props = {
  profile: ProfileType;
};

const Profile = ({}: Props) => {
  const { user } = useContext(GitUserContext);

  const ProfileSection = () => {
    return (
      <>
        <div className=" rounded-full">
          <Image
            src={user.avatar_url}
            alt="avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div>
          <strong>{user.name}</strong>
          <p>{user.bio}</p>
        </div>
      </>
    );
  };
  const Data = () => {
    return (
      <>
        <p>
          <strong>SUMMARY</strong>
        </p>
        <p className="indent-4">
          I&rsquo;m a full-stack software developer, currently work for a public
          hospital at Narathiwat. Knowledge of modern web application
          frameworks, for example React, Express.js, Next.js and Laravel. Design
          and implement application&rsquo;s <br />
          front-end and back-end stack. Experience in Linux administration,
          RESTful, SQL databases and Container technology. I&rsquo;m looking to
          leverage my knowledge and experience into a role as a Full-stack
          developer.
        </p>
        <p>
          <strong>EXPERIENCES</strong>
        </p>
        <p>
          <strong>Software Developer &amp; IT Admin</strong> &ndash; Sep 2018 to
          Current
        </p>
        <p>
          <strong>Bacho Hospital</strong>, Narathiwat
        </p>
        <ul>
          <li>
            Designed, developed, and delivered web applications and APIs
            (Javascript, Typescript, Node.js) for healthcare services.
          </li>
          <li>
            Migrating most of OPD workflows from paper to digital, reduce more
            than 60% of paper and printer toner usage, and increase completeness
            of healthcare information.
          </li>
          <li>
            Deploy and manage applications through Docker Container,
            Docker-compose, and Proxmox VM.
          </li>
          <li>
            Optimize legacy code (PHP), Database queries (MySQL) to improve
            performance and address compatibility issues of HIS software.
          </li>
          <li>Admin 4 local Linux servers, with 99.9% uptime SLA.</li>
        </ul>
        <p>
          <strong>Software Developer</strong> &ndash; Aug 2016 to Aug 2018
        </p>
        <p>
          <strong>Informatix Plus Co., Ltd.</strong>, Bangkok
        </p>
        <ul>
          <li>
            Collaborate with team on developing Thai License Plate Recognition
            and Face Recognition Software (OpenCV, C/C++).
          </li>
          <li>
            Design and implemented an embedded version of Face Recognition
            System (OpenCV, C/C++)
          </li>
        </ul>
        <p>
          <strong>CURRENT STACK:</strong> Next.js (TypeScript), Express.js
          (Node.js), &nbsp;Jest, Testing Library, &nbsp;MySQL, Docker,
        </p>
        <table width="99%">
          <tbody>
            <tr>
              <td width="39%">
                <p>
                  &middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ReactJS (Javascript /
                  Typescript)
                </p>
                <p>
                  &middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NextJS (Javascript /
                  Typescript)
                </p>
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ExpressJS</p>
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CI/CD Pipelines</p>
              </td>
              <td width="26%">
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Node.js</p>
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Postman</p>
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MySQL</p>
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Docker</p>
              </td>
              <td width="33%">
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jest</p>
                <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Git</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>EDUCATION</strong>
        </p>
        <p>
          <strong>Bachelor of Engineering:</strong>{' '}
          <strong>Computer Engineering </strong>- 2016
        </p>
        <p>Prince of Songkhla University, Songkhla</p>
        <p>
          <strong>Honors &amp; awards</strong>
        </p>
        <p>
          <strong>
            Attended 7<sup>th</sup>{' '}
          </strong>
          <strong>Thailand Olympiad in Informatics (</strong>
          <strong>สอวน.</strong>
          <strong>) </strong>&ndash; Naresuan University, 2011
        </p>
        <p>
          <strong>
            Winner 1<sup>st</sup>
          </strong>
          <strong> in ACM-ICPC Thailand Southern Programming Contest</strong>{' '}
          &ndash; Prince of Songkhla University, 2015
        </p>
        <p>
          <strong>
            Attended ACM-ICPC International Collegiate Programming Contest
          </strong>
          <strong> (</strong>
          <strong>World Finals</strong>
          <strong>) </strong>&ndash; Phuket, 2016
        </p>
      </>
    );
  };
  return (
    <>
      <Page>
        <div className="flex h-full gap-3 py-6">
          <LeftPanel />
          <Section className="grow md:w-2/3 lg:w-3/4">
            <div className="flex items-center gap-2 p-2 md:hidden">
              <ProfileSection />
            </div>

            <p>{user?.name}</p>
            <Data />
            <Data />
          </Section>
        </div>
      </Page>
    </>
  );
};

export default Profile;
