import React from 'react';

import useBaseTranslation from '@/hooks/use-base-translation';

import TitleWithDivider from '@/components/TitleWithDivider/TitleWithDivider';
import Typography from '@/components/Typography/Typography';
import ImageButton from '@/components/ImageButton/ImageButton';
import Table, { Column } from '@/components/Table/Table';

import DriveLogo from '@/assets/images/logos/drive.svg';
import MegaLogo from '@/assets/images/logos/mega.svg';
import NvidiaLogo from '@/assets/images/logos/nvidia.svg';
import AMDLogo from '@/assets/images/logos/amd-radeon.svg';
import IntelGraphicsLogo from '@/assets/images/logos/intel-graphics.svg';
import IntelArcLogo from '@/assets/images/logos/intel-arc.svg';

type DownloadsPageProp = Record<string, never>;

const DownloadsPage: React.FC<DownloadsPageProp> = () => {
  const { t } = useBaseTranslation('downloads');

  const requerimentsTableColumns: Column[] = [
    {
      label: t('systemRequirementsTable.settings'),
      name: 'settings',
    },
    {
      label: t('systemRequirementsTable.minimum'),
      name: 'minimum',
    },
    {
      label: t('systemRequirementsTable.recommended'),
      name: 'recommended',
    },
  ];

  const requirementTableRows: { [key: string]: any }[] = [
    {
      settings: t('systemRequirementsTable.processor'),
      minimum: '2.2 GHz',
      recommended: '3.4 GHz',
    },
    {
      settings: t('systemRequirementsTable.memory'),
      minimum: '2 GB',
      recommended: '8 GB',
    },
    {
      settings: t('systemRequirementsTable.operatingSystem'),
      minimum: 'Windows 7',
      recommended: 'Windows 10',
    },
    {
      settings: t('systemRequirementsTable.graphicsCard'),
      minimum: '256 MB',
      recommended: '512 MB',
    },
    {
      settings: t('systemRequirementsTable.storage'),
      minimum: '2 GB HD',
      recommended: '2 GB SSD',
    },
    {
      settings: t('systemRequirementsTable.internet'),
      minimum: '2 Mb',
      recommended: '10 Mb',
    },
  ];

  return (
    <>
      <TitleWithDivider>{t('title')}</TitleWithDivider>
      <div className="flex w-full flex-col gap-8 rounded-lg border border-primary-200 bg-primary-50 p-6 dark:border-primary-900 dark:bg-primary-800/20 md:p-12">
        <div className="flex flex-col gap-4">
          <Typography
            component="h2"
            variant="h3-inter"
            styles="text-primary-950 dark:text-primary-50"
          >
            {t('subtitle.clientDownload')}
          </Typography>
          <Typography
            variant="body2-r"
            styles="text-primary-950 dark:text-primary-50"
          >
            {t('clientSize')} <br /> {t('fileFormat')}
          </Typography>
          <div className="flex flex-wrap gap-8">
            <ImageButton link="https://mega.nz/file/dJghzabY#aOudO1t_8GwvZFw8qNZl9Wt1ofO1jVvCov-PDz9BReQ">
              <DriveLogo />
            </ImageButton>
            <ImageButton link="https://mega.nz/file/dJghzabY#aOudO1t_8GwvZFw8qNZl9Wt1ofO1jVvCov-PDz9BReQ">
              <MegaLogo />
            </ImageButton>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Typography
            component="h2"
            variant="h3-inter"
            styles="text-primary-950 dark:text-primary-50"
          >
            {t('subtitle.systemRequirements')}
          </Typography>
          <Table columns={requerimentsTableColumns} fontSize="16px">
            {requirementTableRows.map((requirement, index) => (
              <tr
                key={index}
                className={`border-b ${requirementTableRows.length != index + 1
                  ? 'border-neutral-300 dark:border-primary-400'
                  : 'border-primary-950 dark:border-primary-50'
                  }`}
              >
                {requerimentsTableColumns.map((column, colIndex) => (
                  <Typography
                    key={colIndex}
                    component="td"
                    variant={colIndex === 0 ? 'label2-s' : 'label2-r'}
                    styles="text-primary-950 dark:text-primary-50 text-center"
                  >
                    {requirement[column.name]}
                  </Typography>
                ))}
              </tr>
            ))}
          </Table>
        </div>
        <div className="flex flex-col gap-4">
          <Typography
            component="h2"
            variant="h3-inter"
            styles="text-primary-950 dark:text-primary-50"
          >
            {t('subtitle.drivers')}
          </Typography>

          <div className="flex flex-wrap gap-8">
            <ImageButton
              link="https://www.nvidia.com.br/Download/index.aspx?lang=br"
              size="medium"
            >
              <NvidiaLogo className="max-h-20 w-[104px]" />
            </ImageButton>
            <ImageButton
              link="https://www.amd.com/pt/support/download/drivers.html"
              size="medium"
            >
              <AMDLogo className="max-h-20 w-[105px]" />
            </ImageButton>
            <ImageButton
              link="https://www.intel.com.br/content/www/br/pt/download/18369/intel-graphics-driver-for-windows-15-40.html"
              size="medium"
            >
              <IntelGraphicsLogo className="max-h-20 w-[63px]" />
            </ImageButton>
            <ImageButton
              link="https://www.intel.com.br/content/www/br/pt/products/docs/discrete-gpus/arc/software/drivers.html"
              size="medium"
            >
              <IntelArcLogo className="h-[86px] w-[85px]" />
            </ImageButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadsPage;
