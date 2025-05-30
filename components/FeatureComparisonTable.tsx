import { JSX, useEffect } from "react"
import { createRoot } from 'react-dom/client'

const ProductFeatureColumn = (params: { productValue: any }): JSX.Element =>
{
    const productValue = params.productValue;
    if (productValue === true)
    {
        return <td className="bi bi-check"></td>
    }
    else if (productValue === false)
    {
        return <td></td>
    }
    else if (productValue === "full")
    {
        return <td><span className="bi bi-check" title="full support"></span></td>
    }
    else if (productValue === "partial")
    {
        return <td>(<span className="bi bi-check" title="partial support"></span>)</td>
    }
    else
    {
        return <td className="">{ productValue }</td>
    }
}

const ProductFeatureColumns = (params: { comparisonData: any, featureData: any }): JSX.Element => 
{
    return <>
        {
            Object.getOwnPropertyNames(params.comparisonData.products)
                .map(productKey => {
                    const productValue = params.featureData[productKey];
                    return <ProductFeatureColumn productValue={productValue} />
                })
        }
    </>
}

const FeatureComparisonTable = () =>
{
    useEffect(() => {
        fetch('/feature-comparison-data.json')
          .then((res) => res.json())
          .then((data) => {
            const featureComparisonTableDiv = document.getElementById('feature-comparison-table');
            if (featureComparisonTableDiv)
            {
                const tableElement = document.getElementById('feature-comparison-table');
                if (tableElement)
                {
                    createRoot(tableElement).render(<FeatureComparisonTableResolved comparisonData={data}/>)
                }
            }
          })
      }, []);

    return <div id="feature-comparison-table"></div>
}

const FeatureComparisonTableResolved = (params: { comparisonData: any }) =>
{
    if (!params.comparisonData)
    {
        return <></>
    }

    console.log("rendering comparison data ");
    console.log(params.comparisonData);

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th className="w-50"></th>
                                { Object.getOwnPropertyNames(params.comparisonData.products)
                                    .map(productKey => {
                                        const productName = (params.comparisonData.products as any)[productKey];
                                        return <th className="">{productName}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            { params.comparisonData.features
                                .map((featureData: any) => {
                                    return (
                                        <tr>
                                            <td className="w-25 option">{featureData.name}</td>
                                            <ProductFeatureColumns comparisonData={params.comparisonData} featureData={featureData} />
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FeatureComparisonTable