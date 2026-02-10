import { Button } from './ui/button';

export function DownloadCV() {
  return (
    <Button onClick={() => window.open('/files/Ian Resume.pdf', '_blank')}>Download CV</Button>
  );
}
