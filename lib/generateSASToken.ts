import {
    BlobServiceClient,
    StorageSharedKeyCredential,
    BlobSASPermissions,
    generateBlobSASQueryParameters,
} from "@azure/storage-blob";


export const containerName = "posts";

const accountName = process.env.AZURE_STORAGE_NAME;
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;


if (!accountName || !accountKey) {
    throw new Error("Azure Storage account name or key is not defined");
}

const sharedKeyCredential = new StorageSharedKeyCredential(
    accountName, 
    accountKey
);

const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
);

export async function generateSASToken() {
    const containerClient = blobServiceClient.getContainerClient(containerName); 

    const permissions = new BlobSASPermissions();
    permissions.read = true;
    permissions.write = true;
    permissions.create = true;

    const startsOn = new Date();
    startsOn.setMinutes(startsOn.getMinutes() - 5); // 5 minutes ago

    const expiresOn = new Date();
    expiresOn.setFullYear(expiresOn.getFullYear() + 10); // 10 years later

    const sasToken = generateBlobSASQueryParameters({
        containerName: containerClient.containerName,
        permissions,
        startsOn,
        expiresOn,
    }, sharedKeyCredential).toString();

    return sasToken;
}
