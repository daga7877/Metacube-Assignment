public with sharing class SearchAccountDetails 
{
    public Account acc{get;set;}
    public List<Account> accountList {get;set;}
// create a list of strings to hold the conditions
    List<string> conditions = new List<string>();
    private integer totalRecs = 0;
    private integer OffsetSize = 0;
    private integer LimitSize= 10;

    public SearchAccountDetails()
    {
        acc = new Account();
    }

    public void searchAcc()
    {
        totalRecs = 0;
        OffsetSize = 0;
        if(accountList !=null && accountList.size()>0)
        {
            accountList=null;
        }
        searchAccounts ();
        conditions.clear();
    }


    public Void searchAccounts()
    {
        if(accountList != null && !accountList.isEmpty())
        {
            accountList.clear();
        }
        String strQuery ='SELECT Id,Name,AccountNumber,Phone,Industry,AnnualRevenue From Account';
 
        if(acc.Name !=null && acc.Name !='')
        {
            conditions.add('Name Like \'%' +acc.Name +'%\' ');
        }
        if(acc.AccountNumber !=null && acc.AccountNumber !='')
        {
            conditions.add('AccountNumber Like\'%' +acc.AccountNumber +'%\' ');
        }

        if (conditions.size() > 0) 
        {
            strQuery += '  WHERE ' + conditions[0];
            for (Integer i = 1; i < conditions.size(); i++)
                strQuery += '  AND ' + conditions[i];
        }
        if(totalRecs !=null && totalRecs ==0)
        {
            List<Account> accTemp = Database.query(strQuery);
            totalRecs = (accTemp !=null &&accTemp.size()>0)?accTemp.size():0;
        }
 // add sort and limits at the end  
        strQuery += ' ORDER BY Name  ASC LIMIT :LimitSize OFFSET :OffsetSize';
  
        accountList  =Database.query(strQuery);
  
   

  //conditions.clear();
  //return accountList.size();
    }

    public void FirstPage()
    {
        OffsetSize = 0;
        searchAccounts();
    }
    public void previous()
    {
        OffsetSize = (OffsetSize-LimitSize);
        searchAccounts();
    }
    public void next()
    {
        OffsetSize = OffsetSize + LimitSize;
        searchAccounts();
    }
    public void LastPage()
    {
        OffsetSize = totalrecs - math.mod(totalRecs,LimitSize);
        searchAccounts();
    }
    public boolean getprev()
    {
        if(OffsetSize == 0)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    public boolean getnxt()
    {
        if((OffsetSize + LimitSize) > totalRecs)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }


}