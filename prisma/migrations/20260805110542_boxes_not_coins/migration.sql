-- AlterEnum
BEGIN;
CREATE TYPE "PackageKind_new" AS ENUM ('BOX', 'VIP');
ALTER TABLE "public"."DonationPackage" ALTER COLUMN "kind" DROP DEFAULT;
ALTER TABLE "DonationPackage" ALTER COLUMN "kind" TYPE "PackageKind_new" USING ("kind"::text::"PackageKind_new");
ALTER TYPE "PackageKind" RENAME TO "PackageKind_old";
ALTER TYPE "PackageKind_new" RENAME TO "PackageKind";
DROP TYPE "public"."PackageKind_old";
ALTER TABLE "DonationPackage" ALTER COLUMN "kind" SET DEFAULT 'BOX';
COMMIT;

-- AlterTable
ALTER TABLE "DonationOrder" DROP COLUMN "pointsGranted";

-- AlterTable
ALTER TABLE "DonationPackage" DROP COLUMN "points",
ALTER COLUMN "kind" SET DEFAULT 'BOX';

